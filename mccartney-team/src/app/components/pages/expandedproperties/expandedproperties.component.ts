import {Component, OnInit} from '@angular/core';
import {SearchConfig} from "../../../data/searchConfig";
import {TeamStore} from "../../common/team-store";
import {TeamService} from "../../common/team-service";
import {SearchParams} from "../../../data/searchParams";
import {Property} from "../../../data/property";

@Component({
  selector: 'app-expandedproperties',
  templateUrl: './expandedproperties.component.html',
  styleUrls: ['./expandedproperties.component.css']
})
export class ExpandedpropertiesComponent implements OnInit {

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
    config.hideDistrict = true;

    //Update the store
    this.store.setSearchConfig(config);
  }
}
