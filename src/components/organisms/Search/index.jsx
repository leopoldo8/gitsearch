import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { toast } from 'react-toastify';

import Button from '@components/molecules/Button';
import SearchInput from '@components/molecules/SearchInput';

import UsersAPI from '@api/services/users';

import {
  Container,
  ButtonsContainer
} from './style';

const Search = () => {
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object({
    search: Yup.string().required('Digite um nome de usuário para pesquisar'),
  });

  const handleFormSubmit = async (values) => {
    setLoading(values.seeAll ? 'seeAll' : 'search');

    const fetchData = () => {
      if (values.seeAll) return UsersAPI.listUsers();

      return UsersAPI.search(values.search);
    }

    try {
      const response = await fetchData();
      if (response.status === 200) {
        console.log(response.data);
      }
    } catch (e) {
      toast.error('Alguma coisa deu errado. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
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
        <ButtonsContainer>
          <Button
            label="Ver Todos"
            onClick={onSeeAll}
            loading={loading === 'seeAll'}
          />
          <Button
            label="Buscar"
            type="secondary"
            onClick={onSearch}
            loading={loading === 'search'}
          />
        </ButtonsContainer>
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
}

export default Search;
