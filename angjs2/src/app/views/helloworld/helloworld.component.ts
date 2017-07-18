import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spire-hello-world',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.scss']
})
export class HelloWorldComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello from Hello World');
  }

}
