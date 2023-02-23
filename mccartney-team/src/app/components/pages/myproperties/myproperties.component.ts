import {Component, OnInit} from '@angular/core';
import {TeamStore} from '../../common/team-store';
import {TeamService} from "../../common/team-service";
import {SearchConfig} from "../../../data/searchConfig";
import {SearchParams} from "../../../data/searchParams";
import {Property} from "../../../data/property";

@Component({
  selector: 'app-myproperties',
  templateUrl: './myproperties.component.html',
  styleUrls: ['./myproperties.component.css']
})
export class MypropertiesComponent implements OnInit {

  propList: Property[] = [];

  constructor(private store: TeamStore) {
    store.propertyList.subscribe(data => {
      this.propList = data;
      console.log('Properties received');
    })
  }

  ngOnInit() {
    //Create a search config obj.  Initialize and then set fields to hide (if any)
    var config = new SearchConfig();
    config.hideAddress = true;
    config.hideCity = true;
    config.hideState=true;

    //Update the store
    this.store.setSearchConfig(config);
  }


}
