export class SearchParams {
  address: string;
  city: string;
  state: string;
  district: string;
  minPrice: string;
  maxPrice: string;
  beds: string;
  baths: string;

  constructor() {
    this.address = '';
    this.city = '';
    this.state = '';
    this.district = '';
    this.minPrice = '';
    this.maxPrice = '';
    this.beds = '';
    this.baths = '';
  }

  reset(){
    this.address = '';
    this.city = '';
    this.state = '';
    this.district = '';
    this.minPrice = '';
    this.maxPrice = '';
    this.beds = '';
    this.baths = '';
  }
}
