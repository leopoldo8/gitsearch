import API from '../index';

class UsersService extends API {
  getUserByUsername(username) {
    return this.get(`/users/${username}`);
  }
}

export default new UsersService();
