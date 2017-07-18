import { Component, Input } from '@angular/core';
import { Data } from '../../data';
@Component({
  selector: 'data-child',
  template: `
    <h3>{{data.name}} says:</h3>
    <p>I, {{data.name}}, am at your service, {{masterName}}.</p>
  `
})
export class DataChildComponent {
  @Input() data: Data;
  @Input('master') masterName: string;
}
