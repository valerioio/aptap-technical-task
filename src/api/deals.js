import Axios from "axios";

class MockApi {
  axiosInstance;

  constructor() {
    this.axiosInstance = Axios.create({
      baseURL: "https://6177b8b59c328300175f5adc.mockapi.io/api/test/deals",
      responseType: "json",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async getDeals() {
    try {
      const response = await this.axiosInstance.get("");
      const { deals } = response.data;
      return deals;
    } catch (error) {
      console.error(error);
    }
  }

  async getDealById(id) {
    try {
      const deals = await this.getDeals();
      const deal = deals.find(({ deal_id }) => deal_id === id);
      return deal;
    } catch (error) {
      console.error(error);
    }
  }

  // async getDealListByIds(ids) {
  //   try {
  //     const deals = await this.getDeals();
  //     const filteredDeals = ids.map((id) =>
  //       deals.find(({ deal_id }) => deal_id === id)
  //     );
  //     return filteredDeals;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
}

export const dealsApi = new MockApi();
