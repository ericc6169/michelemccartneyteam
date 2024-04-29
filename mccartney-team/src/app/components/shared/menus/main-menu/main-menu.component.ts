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
            routerLink: 'mortgagecalc'
          }
        ]
      },
      {
        label: 'SELLING',
        items: [
          {
            label: 'SERVICES PROVIDED',
            routerLink: 'seller'
          },
          {
            label: 'STAGING',
            routerLink: 'staging'
          },
          {
            label: 'WHAT IS MY HOME WORTH',
            routerLink: 'homevalue'
          }
        ]
      },
      {
        label: 'MEET THE TEAM',
        routerLink: 'about'
      },
      {
        label: 'TESTIMONIALS',
        routerLink: 'testimonials'
      },
      {
        label: 'NEWSLETTERS',
        routerLink: 'news'
      },
      {
        label: 'CONTACT US',
        routerLink: 'contact'
      }
    ];
  }

}
