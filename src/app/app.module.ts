import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { UserListComponent } from './pages/user-list/user-list.component';
import { MainComponent } from './pages/main/main.component';
import { CenzorMainComponent } from './pages/cenzor-main/cenzor-main.component';
import { TaskInputComponent } from './pages/task-input/task-input.component';
import { ListInputComponent } from './pages/task-input/list-input/list-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    MainComponent,
    CenzorMainComponent,
    TaskInputComponent,
    ListInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
