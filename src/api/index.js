import axios from 'axios';
import { toast } from 'react-toastify';

class API {
  constructor() {
    this.authBearerKey = `${process.env.REACT_APP_PROJECT_NAME}-token`;

    this.token = null;

    this.deactivateHandleErrorOnce = false;

    this.service = axios.create({
      baseURL: API.host(),
      timeout: 30000,
    });

    this.readCredentials();
    this.setBearer();
  }

  static host() {
    return process.env.REACT_APP_API_BASE_URL;
  }

  handleError({ response }) {
    if (!response) return;

    if (response.status) {
      console.error(response.status);
    }

    const { message } = response.data;
    if (message && !this.deactivateHandleErrorOnce) {
      if (typeof message === 'string')
        toast.error(message);
      else
        message.forEach(err => toast.error(err));
    } else if (this.deactivateHandleErrorOnce) {
      this.deactivateHandleErrorOnce = false;
    }

    if (response.status === 401) {
      this.resetCredentials();
      window.location.reload();
    }
  }

  setBearer() {
    this.service.defaults.headers.common.Authorization = this.token ? `Bearer ${this.token}` : '';
  }

  readCredentials() {
    this.token = localStorage.getItem(this.authBearerKey) || '';
  }

  resetCredentials() {
    this.token = '';
    localStorage.setItem(this.authBearerKey, '');
  }

  setCredentials(token) {
    localStorage.setItem(this.authBearerKey, token);
    this.token = token;
    return this.setBearer();
  }

  async get(resource, params) {
    return this.service.get(resource, params).catch(error => {
      this.handleError(error);
      return Promise.reject(error);
    });
  }

  async post(resource, params) {
    return this.service.post(resource, params).catch(error => {
      this.handleError(error);
      return Promise.reject(error);
    });
  }

  async put(resource, params) {
    return this.service.put(resource, params).catch(error => {
      this.handleError(error);
      return Promise.reject(error);
    });
  }

  async delete(resource) {
    return this.service.delete(resource).catch(error => {
      this.handleError(error);
      return Promise.reject(error);
    });
  }

  async patch(resource, params) {
    return this.service.patch(resource, params).catch(error => {
      this.handleError(error);
      return Promise.reject(error);
    });
  }
}

export default API;
