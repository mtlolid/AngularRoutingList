import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { CenzorMainComponent } from './pages/cenzor-main/cenzor-main.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { TaskInputComponent } from './pages/task-input/task-input.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: 'main', component: MainComponent },
  { path: 'cenzor', component: CenzorMainComponent },
  { path: 'userlist', component: UserListComponent },
  { path: 'tasklist', component: TaskInputComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
