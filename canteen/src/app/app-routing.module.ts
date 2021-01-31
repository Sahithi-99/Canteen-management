import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  { path: '', canActivate:[AuthGuard], data: {roles: ["user", "admin"]} , loadChildren: () => import('./main/main.module' ).then(m => m.MainModule) },
  { path: 'signup', loadChildren: () => import('./signup/signup.module' ).then(m => m.SignupModule) },
  { path: 'login', loadChildren: ()=>import('./login/login.module').then(m => m.LoginModule) },
  { path: 'admin', canActivate:[AuthGuard], data: {roles: ["admin"]} ,loadChildren:  ()=>import('./admin/admin.module').then(m => m.AdminModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
