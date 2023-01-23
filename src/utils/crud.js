import axios from "axios";

class CRUD {
  /**
   * A function that fetches the movies data from the API of TMDB.
   *
   * @param {string} url the URL of the targeted API.
   *
   * @return {Array} A list of movie objects.
   */
  static async fetchData(url) {
    try {
      const response = await axios.get(url);
      return response.data.results;
    } catch {
      return [];
    }
  }
}

export default CRUD;
