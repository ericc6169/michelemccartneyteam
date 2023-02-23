import { Component } from '@angular/core';
import {Constants} from "../../common/constants";

@Component({
  selector: 'app-socialmedia',
  templateUrl: './socialmedia.component.html',
  styleUrls: ['./socialmedia.component.css']
})
export class SocialmediaComponent {

  constructor(public constants :Constants){

  }

  //Handlers
  openFacebook() {
    window.open(this.constants.facebookUrl, '_blank');
  }

  openTwitter() {
    window.open(this.constants.twitterUrl, '_blank');
  }

  openInstagram() {
    window.open(this.constants.instagramUrl, '_blank');
  }

}
