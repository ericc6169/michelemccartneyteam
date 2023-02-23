import {Component, OnInit} from '@angular/core';
import {TeamStore} from '../../common/team-store';
import {TeamService} from "../../common/team-service";
import {SearchConfig} from "../../../data/searchConfig";
import {SearchParams} from "../../../data/searchParams";

@Component({
  selector: 'app-propertysearch',
  templateUrl: './propertysearch.component.html',
  styleUrls: ['./propertysearch.component.css']
})
export class PropertysearchComponent implements OnInit {

  searchConfig: SearchConfig;

  districtList: any[];

  bedList: any[];
  bathList: any[];

  stateList: any[];
  searchParams: SearchParams = new SearchParams();

  constructor(private store: TeamStore) {
    console.log('constructor')
    this.searchConfig = new SearchConfig();

    store.sConfig.subscribe(data => {
      this.searchConfig = data;
    })

    this.districtList = [
      {name: 'Any', code: ''},
      {name: 'Antietam', code: 'Antietam'},
      {name: 'Boyertown', code: 'Boyertown'},
      {name: 'Brandywine Heights', code: 'BrandywineHeights'},
      {name: 'Conrad Weiser', code: 'ConradWeiser'},
      {name: 'Daniel Boone', code: 'DanielBoone'},
      {name: 'Exeter', code: 'Exeter'},
      {name: 'Fleetwood ', code: 'Fleetwood'},
      {name: 'Governor Mifflin', code: 'GovernorMifflin'},
      {name: 'Hamburg', code: 'Hamburg'},
      {name: 'Kutztown', code: 'Kutztown'},
      {name: 'Muhlenberg', code: 'Muhlenberg'},
      {name: 'Oley Valley', code: 'OleyValley'},
      {name: 'Reading', code: 'Reading'},
      {name: 'Schuylkill Valley', code: 'SchuylkillValley'},
      {name: 'Tulpehocken', code: 'Tulpehocken'},
      {name: 'Twin Valley', code: 'TwinValley'},
      {name: 'Wilson', code: 'Wilson'},
      {name: 'Wyomissing', code: 'Wyomissing'}

    ];

    this.stateList = [
      {name: 'Any', code: ''},
      {name: 'Alabama', code: 'AL'},
      {name: 'Alaska', code: 'AK'},
      {name: 'Arizona', code: 'AZ'},
      {name: 'Arkansas', code: 'AR'},
      {name: 'California', code: 'CA'},
      {name: 'Colorado', code: 'CO'},
      {name: 'Connecticut', code: 'CT'},
      {name: 'Delaware', code: 'DE'},
      {name: 'District of Columbia', code: 'DC'},
      {name: 'Florida', code: 'FL'},
      {name: 'Georgia', code: 'GA'},
      {name: 'Hawaii', code: 'HI'},
      {name: 'Idaho', code: 'ID'},
      {name: 'Illinois', code: 'IL'},
      {name: 'Indiana', code: 'IN'},
      {name: 'Iowa', code: 'IA'},
      {name: 'Kansas', code: 'KS'},
      {name: 'Kentucky', code: 'KY'},
      {name: 'Louisiana', code: 'LA'},
      {name: 'Maine', code: 'ME'},
      {name: 'Maryland', code: 'MD'},
      {name: 'Massachusetts', code: 'MA'},
      {name: 'Michigan', code: 'MI'},
      {name: 'Minnesota', code: 'MN'},
      {name: 'Mississippi', code: 'MS'},
      {name: 'Missouri', code: 'MO'},
      {name: 'Montana', code: 'MT'},
      {name: 'Nebraska', code: 'NE'},
      {name: 'Nevada', code: 'NV'},
      {name: 'New Hampshire', code: 'NH'},
      {name: 'New Jersey', code: 'NJ'},
      {name: 'New Mexico', code: 'NM'},
      {name: 'New York', code: 'NY'},
      {name: 'North Carolina', code: 'NC'},
      {name: 'North Dakota', code: 'ND'},
      {name: 'Ohio', code: 'OH'},
      {name: 'Oklahoma', code: 'OK'},
      {name: 'Oregon', code: 'OR'},
      {name: 'Pennsylvania', code: 'PA'},
      {name: 'Rhode Island', code: 'RI'},
      {name: 'South Carolina', code: 'SC'},
      {name: 'South Dakota', code: 'SD'},
      {name: 'Tennessee', code: 'TN'},
      {name: 'Texas', code: 'TX'},
      {name: 'Utah', code: 'UT'},
      {name: 'Vermont', code: 'VT'},
      {name: 'Virginia', code: 'VA'},
      {name: 'Washington', code: 'WA'},
      {name: 'West Virginia', code: 'WV'},
      {name: 'Wisconsin', code: 'WI'},
      {name: 'Wyoming', code: 'WY'},
    ];

    this.bedList = [
      {name: 'Any', code: ''},
      {name: '1', code: '1'},
      {name: '2', code: '2'},
      {name: '3', code: '3'},
      {name: '4', code: '4'},
      {name: '5+', code: '5+'},
    ]

    this.bathList = [
      {name: 'Any', code: ''},
      {name: '1', code: '1'},
      {name: '1.5', code: '1.5'},
      {name: '2', code: '2'},
      {name: '2.5', code: '2.5'},
      {name: '3', code: '3'},
      {name: '3.5', code: '3.5'},
      {name: '4+', code: '4+'},
    ]
  }


  ngOnInit() {

  }

  search() {
    //Perform the search
    this.store.searchProperties(this.searchParams);
  }

}
