import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AbbegateComponent } from './abbegate/abbegate.component';
import { TrackAndTraceComponent } from './track-and-trace/track-and-trace.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NewCustomerComponent } from './abbegate/new-customer/new-customer.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {path:'abbegate',component: AbbegateComponent},
  {path:'trackandtrace',component: TrackAndTraceComponent},
  {path:'abbegate/profile', component: UserProfileComponent},
  {path:'abbegate/newCustomer',component: NewCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
