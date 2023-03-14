import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ContactComponent } from './contact/contact.component';


@Injectable({
  providedIn: 'root'
})
export class TestService {
  value:any = ""; 
  dataByEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor() {  
  }
  sendDataByEvent(data: any) {
    this.dataByEvent.emit(data);
  }
}
