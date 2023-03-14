import { Component, OnInit , AfterContentChecked,AfterViewInit,AfterContentInit,AfterViewChecked,DoCheck } from '@angular/core';
import { from } from 'rxjs';
import { TestService } from '../test.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // data:any;  
  // data:any;  
  name: any="";

  constructor(private _testService: TestService) {  
  }  
  ngOnInit(): void {
    this.getData();
    setTimeout(() => {
          console.log('timeeout')
    }, 1000);
  }
  
  getData() {
    this._testService.dataByEvent.subscribe(response => {
      console.log(response);  // you will get the data here.
    });
  }
 /* ngAfterContentChecked(): void {
    console.log('AfterContentChecked')
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit')
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit')
  }
 ngAfterViewChecked(): void {
    console.log('AfterViewChecked')
  }
  ngDoCheck(): void {
    console.log('DoCheck')
  }*/
  /*ngOnInit(): void {
    this.getData();
  }*/
  
}
