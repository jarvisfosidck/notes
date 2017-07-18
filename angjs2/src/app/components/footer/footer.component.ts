import { Component } from '@angular/core';

import { TestService } from '../../services/test.service';

@Component({
  selector: 'spire-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  repoUrl = 'https://bitbucket.org/spiremedia/angular-starter';
  message: string;

  constructor(private test: TestService) {
    this.message = this.test.message;
  }

}
