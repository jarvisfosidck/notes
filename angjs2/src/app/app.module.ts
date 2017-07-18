// Core Libraries
import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';


// Routing
import { routing } from './app.routing';

//in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


// Top Level Component
import { AppComponent } from './app.component';

// Services
import { TestService } from './services/test.service';
import { DataService } from './data.service';

// Views
import { HomeComponent } from './views/home/home.component';
import { HelloWorldComponent } from './views/helloworld/helloworld.component';
import { NewPageComponent } from './views/new_page/new_page.component';
import { DataChildComponent } from './views/new_page/data-child';
import { CountdownTimerComponent } from './views/new_page/countdown-timer.component';
import { VoterComponent } from './views/new_page/voter.component';
import { AstronautComponent } from './views/new_page/astronaut.component';

// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    HelloWorldComponent,
    NewPageComponent,
    HeaderComponent,
    DataChildComponent,
    CountdownTimerComponent,
    VoterComponent,
    AstronautComponent,
    FooterComponent
  ],
  providers: [
    TestService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
