import API from '../index';

class UsersService extends API {
  search(query) {
    const formattedQuery = query.replace(/ /g, '+')
    return this.get(`/search/users?q=${formattedQuery}`);
  }

  listUsers() {
    return this.get(`/users`);
  }
}

export default new UsersService();
