import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './components/my-component/my-component.component';
import { MyDirectiveDirective } from './directives/my-directive.directive';
import { MyPipePipe } from './pipes/my-pipe.pipe';
import { MyObservableAsyncComponentComponent } from './components/my-observable-async-component/my-observable-async-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    MyDirectiveDirective,
    MyPipePipe,
    MyObservableAsyncComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
