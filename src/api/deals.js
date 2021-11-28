import MockApi from "./mock-api";

// helper class to restructure data fetched with the MockApi class
class DealsApi {
  axiosInstance;

  constructor() {
    this.axiosInstance = new MockApi();
  }

  async get() {
    try {
      const deals = await this.axiosInstance.get();
      for (const deal of deals) {
        deal.monthly_price = "£" + deal.monthly_price.toFixed(2);
        deal.internet_speed += " Mbps";
        deal.set_up_cost = "£" + deal.set_up_cost;
        deal.one_off_cost = "£0";
      }
      return deals;
    } catch (error) {
      console.error(error);
    }
  }
}

export const dealsApi = new DealsApi();
