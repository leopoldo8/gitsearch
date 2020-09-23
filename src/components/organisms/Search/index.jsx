import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useHistory } from "react-router-dom";

import Button from '@components/molecules/Button';
import SearchInput from '@components/molecules/SearchInput';

import {
  Container,
  ButtonsContainer
} from './style';

const Search = ({ origin, initialValue }) => {
  const history = useHistory();

  const validationSchema = Yup.object({
    search: Yup.string().required('Digite um nome de usuário para pesquisar'),
  });

  const handleFormSubmit = async (values) => {
    const path = `/users${!values.seeAll ? `?q=${values.search}` : ''}`;
    history.push(path);
  }

  const formContent = ({ setFieldValue, setFieldError, values, errors, handleSubmit, handleChange }) => {
    const onChange = (event) => {
      setFieldError('search', '');
      handleChange(event);
    }

    const onSeeAll = async () => {
      setFieldValue('seeAll', true, false);
    }

    const onSearch = () => {
      setFieldValue('seeAll', false);
    }

    const onSubmit = (e) => {
      e.preventDefault();

      if (values.seeAll) {
        setFieldError('search', '');
        handleFormSubmit(values);
      } else {
        handleSubmit(values);
      }
    }

    return (
      <form onSubmit={onSubmit}>
        <SearchInput
          name="search"
          value={values.search}
          error={errors.search}
          onChange={e => onChange(e)}
          icon={origin === 'users-list' ? 'search' : ''}
          size={origin === 'users-list' ? 'large' : 'medium'}
        />
        {origin !== 'users-list' ? (
          <ButtonsContainer>
            <Button
              label="Buscar"
              type="submit"
              schema="secondary"
              onClick={onSearch}
            />
            <Button
              label="Ver Todos"
              type="submit"
              onClick={onSeeAll}
            />
          </ButtonsContainer>
        ) : null}
      </form>
    );
  }

  return (
    <Container>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={{ search: initialValue || '', seeAll: false }}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
        enableReinitialize
      >
        {formContent}
      </Formik>
    </Container>
  );
};

Search.propTypes = {
  origin: PropTypes.string,
  initialValue: PropTypes.string
};

Search.defaultProps = {
  origin: 'home',
  initialValue: ''
}

export default Search;
