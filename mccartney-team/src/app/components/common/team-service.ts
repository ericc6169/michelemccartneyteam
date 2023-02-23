import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

import {Observable} from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json',
    application_id: '',
    entity_id: '',
  })
};

@Injectable()
export class TeamService
{
//  Constructor
  constructor(private http: HttpClient) {

  }

}
