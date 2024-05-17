import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AbbegateComponent } from './abbegate/abbegate.component';
import { TrackAndTraceComponent } from './track-and-trace/track-and-trace.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NewCustomerComponent } from './abbegate/customer/new-customer/new-customer.component';
import { ViewCustomerComponent } from './abbegate/customer/view-customer/view-customer.component';
import { UpdateCustomerComponent } from './abbegate/customer/update-customer/update-customer.component';
import { NewProductComponent } from './abbegate/new-product/new-product.component';
import { ViewProductComponent } from './abbegate/view-product/view-product.component';
import { NewSupplierComponent } from './abbegate/supplier/new-supplier/new-supplier.component';
import { ViewSupplierComponent } from './abbegate/supplier/view-supplier/view-supplier.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateSupplierComponent } from './abbegate/supplier/update-supplier/update-supplier.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {path:'abbegate',component: AbbegateComponent},
  {path:'trackandtrace',component: TrackAndTraceComponent},
  {path:'abbegate/profile', component: UserProfileComponent},
  {path:'abbegate/newCustomer',component: NewCustomerComponent},
  {path:'abbegate/viewCustomer', component: ViewCustomerComponent},
  {path:'abbegate/updateCustomer/:id', component: UpdateCustomerComponent},
  {path:'abbegate/newProduct',component: NewProductComponent},
  {path:'abbegate/viewProduct',component: ViewProductComponent},
  {path:'abbegate/newSupplier',component:NewSupplierComponent},
  {path:'abbegate/viewSupplier',component:ViewSupplierComponent},
  {path:'abbegate/updateSupplier/:id', component:UpdateSupplierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
