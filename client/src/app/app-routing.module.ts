import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitComponent } from './components/init/init.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { ListbynameComponent } from './components/listbyname/listbyname.component';

const routes: Routes = [
  { path:'', redirectTo:'/inicio', pathMatch:'full'},
  {path:'inicio' , component: InitComponent},
  {path:'add', component:CreateComponent},
  {path:'edit/:id', component:EditComponent},
  {path:'listbyname/:username', component:ListbynameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }