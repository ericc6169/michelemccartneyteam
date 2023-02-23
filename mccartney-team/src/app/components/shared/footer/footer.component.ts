import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  curYear: number;
disclaimerText:string;

  constructor() {
    this.curYear = new Date().getFullYear();

    this.disclaimerText="Information deemed reliable but not guaranteed. The data relating to real estate for sale on this website appears in part through the BRIGHT Internet Data Exchange program, a voluntary cooperative exchange of property listing data between licensed real estate brokerage firms in which Keller Williams Platinum Realty participates, and is provided by BRIGHT through a licensing agreement. Real estate listings held by brokerage firms other than Keller Williams Platinum Realty are marked with the IDX logo and detailed information about each listing includes the name of the listing broker. The information provided by this website is for the personal, non-commercial use of consumers and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. Some properties which appear for sale on this website may no longer be available because they are under contract, have Closed or are no longer being offered for sale. Some real estate firms do not participate in IDX and their listings do not appear on this website. Some properties listed with participating firms do not appear on this website at the request of the seller."
  }
}
