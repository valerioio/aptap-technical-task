const axios = require("axios");

// helper networking class to obtain mock data
export default class MockApi {
  axiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "https://6177b8b59c328300175f5adc.mockapi.io/api/test/deals",
      responseType: "json",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async get() {
    try {
      const response = await this.axiosInstance.get("");
      const { deals } = response.data;
      return deals;
    } catch (error) {
      console.error(error);
    }
  }
}
