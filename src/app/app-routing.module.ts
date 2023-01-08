import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkToLoginComponent } from './link-to-login/link-to-login.component';
import { RedirectToLoginComponent } from './redirect-to-login/redirect-to-login.component';

const routes: Routes = [
  {path: 'sso_test.php', component: RedirectToLoginComponent},
  {path: 'login', component: LinkToLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
