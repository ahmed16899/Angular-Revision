import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
TestService

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  value: any;  
  value2:any;


  constructor(private _testService: TestService) {  

}  

items = ['item1', 'item2', 'item3', 'item4'];

addItem(newItem: string) {
  this.items.push(newItem);
}

  ngOnInit(): void {

  }
  getValue(inputName: any)
  {
    this.value=inputName;
    this._testService.sendDataByEvent(inputName);
    console.log( this.value);
   
  }
  }


