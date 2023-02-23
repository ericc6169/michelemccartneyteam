export class SearchConfig {
  hideAddress: boolean;
  hideCity: boolean;
  hideState: boolean;
  hideDistrict: boolean;
  hideMinPrice: boolean;
  hideMaxPrice: boolean;
  hideBeds: boolean;
  hideBaths: boolean;


  constructor() {
    this.hideCity = false;
    this.hideAddress = false;
    this.hideState = false;
    this.hideDistrict = false;
    this.hideMinPrice = false;
    this.hideMaxPrice = false;
    this.hideBeds = false;
    this.hideBaths = false;
  }
}
