import axios from 'axios';
class BaseApi {
  /**
   *
   * @param {object|array} input input data
   * @return {Promise<object|array>}
   */
  rpc (url, input) {
    return axios.post(url, input);
  }
}