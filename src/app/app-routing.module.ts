import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'login',
    loadChildren:() => import('./page/login/login.module').then(n => n.LoginModule),     
    pathMatch: 'full'
  },
  {
    path:'chat',
    loadChildren:() => import('./page/chat/chat.module').then(n => n.ChatModule),     
    pathMatch: 'full'
  },
  {
    path:'**',
    redirectTo:'login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
