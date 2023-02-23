import { Component } from '@angular/core';
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent {

  constructor(private messageService: MessageService) {}

  showResponse(response:any) {
    //call to a backend to verify against recaptcha with private key
    this.messageService.add({severity:'info', summary:'Succees', detail: 'User Responded', sticky: true});
    console.log('Click captcha');
    console.log(response.response);
  }
  initRecaptcha(data:any){
    console.log('Init captcha');
    console.log(data);
  }

  loadRecaptcha(data:any){
    console.log('Load captcha');
    console.log(data);
  }
}
