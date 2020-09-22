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

const Search = ({ origin }) => {
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

    const onSeeAll = (e) => {
      setFieldValue('seeAll', true, false);
    }

    const onSearch = () => {
      setFieldValue('seeAll', false)
    }

    const onSubmit = (e) => {
      if (values.seeAll) {
        e.preventDefault();
        setFieldError('search', '');
        handleFormSubmit(values);
      } else {
        handleSubmit(e);
      }
    }

    return (
      <form onSubmit={onSubmit}>
        <SearchInput
          name="search"
          value={values.search}
          error={errors.search}
          onChange={e => onChange(e)}
        />
        {origin !== 'users-list' ? (
          <ButtonsContainer>
            <Button
              label="Ver Todos"
              onClick={onSeeAll}
            />
            <Button
              label="Buscar"
              type="secondary"
              onClick={onSearch}
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
        initialValues={{ search: '' }}
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
  origin: PropTypes.string
};

Search.defaultProps = {
  origin: 'home'
}

export default Search;
