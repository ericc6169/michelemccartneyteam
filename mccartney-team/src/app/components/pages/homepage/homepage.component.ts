import {Component, OnInit} from '@angular/core';
import {SearchConfig} from "../../../data/searchConfig";
import {TeamStore} from '../../common/team-store';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  imgData: any[];

  constructor(private store: TeamStore) {
    //////////////////////////////////////
    //Load list of images
    this.imgData = [
      {"previewImageSrc": "../../../assets/0.jpg"},
      {"previewImageSrc": "../../../assets/2.jpg"},
      {"previewImageSrc": "../../../assets/5.jpg"},
      {"previewImageSrc": "../../../assets/7.jpg"},
      {"previewImageSrc": "../../../assets/8.jpg"},
      {"previewImageSrc": "../../../assets/9.jpg"},
      {"previewImageSrc": "../../../assets/10.jpg"},
      {"previewImageSrc": "../../../assets/12.jpg"},
      {"previewImageSrc": "../../../assets/15.jpg"}

    ];
  }

  ngOnInit() {
    console.log(this.imgData);

    //Create a search config obj.  Initialize and then set fields to hide (if any)
    var config = new SearchConfig();
    config.hideState=true;

    //Update the store
    this.store.setSearchConfig(config);

  }
}
