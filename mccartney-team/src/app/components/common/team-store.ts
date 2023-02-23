import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {BehaviorSubject} from 'rxjs'
import {SearchParams} from "../../data/searchParams";
import {SearchConfig} from "../../data/searchConfig";
import {Router} from "@angular/router";
//import {HaloService} from "./halo-service";
import {DialogService} from "primeng/dynamicdialog";
import {Property} from "../../data/property";

@Injectable()
export class TeamStore {

  ////////////////////////////////////
  //          CONSTRUCTOR           //
  ////////////////////////////////////
  constructor(private dlgSvc: DialogService, private router: Router) {


  }

  ////////////////////////////////////
  //        LOCAL VARIABLES         //
  ////////////////////////////////////


  ////////////////////////////////////
  //       BEHAVIOR SUBJECTS        //
  ////////////////////////////////////

  //Search config
  sConfig: BehaviorSubject<SearchConfig> = new BehaviorSubject(new SearchConfig());

  //Search parameters
  sParams: BehaviorSubject<SearchParams> = new BehaviorSubject(new SearchParams());

  //Properties
  propertyList: BehaviorSubject<Property[]> = new BehaviorSubject<Property[]>([]);


  ////////////////////////////////////
  //            METHODS             //
  ////////////////////////////////////

  //////////////////////////////////////
  //SearchConfig
  getSearchConfig() {
    return this.sConfig.value;
  }

  setSearchConfig(data: SearchConfig) {
    this.sConfig.next(data);
  }

  //////////////////////////////////////
  //SearchParameters
  getSearchParam() {
    return this.sParams.value;
  }

  setSearchParam(data: SearchParams) {
    this.sParams.next(data);
  }

  //////////////////////////////////////
  //Properties
  searchProperties(data: SearchParams) {
    console.log('Will be performing search here');
    console.log(data);
    //Perform the search using the service


    //Process the results and update
//    this.propertyList.next(tmp);
  }

}
