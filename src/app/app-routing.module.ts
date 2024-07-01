import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestheroComponent } from './testhero/testhero.component';

const routes: Routes = [
  {path:'home',loadChildren: () => import('./shared/components/home/home.module').then(m => m.HomeModule)},
  {path:'hero',component:TestheroComponent},
  {path:'',redirectTo:'/hero',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
