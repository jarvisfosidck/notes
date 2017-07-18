import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { HelloWorldComponent } from './views/helloworld/helloworld.component';
import { NewPageComponent } from './views/new_page/new_page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hello-world', component: HelloWorldComponent},
  { path: 'new-page', component: NewPageComponent}
];

export const routing = RouterModule.forRoot(routes);
