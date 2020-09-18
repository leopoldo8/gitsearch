import axios from 'axios';

class API {
  constructor() {
    this.service = axios.create({
      baseURL: API.host(),
      timeout: 30000
    });
  }

  static host() {
    return process.env.REACT_APP_API_BASE_URL;
  }

  handleError({ response }) {
    if (!response) return;

    if (response.status) {
      console.error(response.status);
    }
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
