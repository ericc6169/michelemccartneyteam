import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Menubar} from "primeng/menubar";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  menuItems: MenuItem[];

  constructor() {
    this.menuItems = [];
  }

  ngOnInit() {
    this.menuItems = [
      {
        label: 'HOME',
        routerLink: 'home'
      },
      {
        label: 'HOME SEARCH',
        items: [
          {
            label: 'MY LISTINGS',
            routerLink: 'myListings'
          },
          {
            label: 'BERKS COUNTY',
            routerLink: 'local'
          },
          {
            label: 'EXPANDED LISTINGS',
            routerLink: 'expListings'
          },
          {
            label: 'OPEN HOUSES',
            routerLink: 'openHouses'
          },
        ]
      },
      {
        label: 'BUYING',items: [
          {
            label: 'SERVICES PROVIDED',
            routerLink: 'buyer'
          },
          {
            label: 'MORTGAGE CALCULATOR',
            routerLink: 'seller'
          }
        ]
      },
      {
        label: 'SELLING',
        items: [
          {
            label: 'SERVICES PROVIDED',
            routerLink: 'buyer'
          },
          {
            label: 'STAGING',
            routerLink: 'seller'
          },
          {
            label: 'WHAT IS MY HOME WORTH',
            routerLink: 'financing'
          }
        ]
      },
      {
        label: 'MEET THE TEAM',
        routerLink: 'about'
      },
      {
        label: 'TESTIMONIALS',
        routerLink: 'about'
      },
      {
        label: 'NEWSLETTERS',
        routerLink: 'about'
      },
      {
        label: 'CONTACT US',
        routerLink: 'contact'
      }
    ];
  }

}
