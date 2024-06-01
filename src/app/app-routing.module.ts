import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AbbegateComponent } from './abbegate/abbegate.component';
import { TrackAndTraceComponent } from './track-and-trace/track-and-trace.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NewCustomerComponent } from './abbegate/customer/new-customer/new-customer.component';
import { ViewCustomerComponent } from './abbegate/customer/view-customer/view-customer.component';
import { UpdateCustomerComponent } from './abbegate/customer/update-customer/update-customer.component';
import { NewProductComponent } from './abbegate/product/new-product/new-product.component';
import { ViewProductComponent } from './abbegate/product/view-product/view-product.component';
import { NewSupplierComponent } from './abbegate/supplier/new-supplier/new-supplier.component';
import { ViewSupplierComponent } from './abbegate/supplier/view-supplier/view-supplier.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateSupplierComponent } from './abbegate/supplier/update-supplier/update-supplier.component';
import { NewQuoteComponent } from './abbegate/quotes/new-quote/new-quote.component';
import { NewOrderComponent } from './abbegate/orders/new-order/new-order.component';
import { QuoteLiveComponent } from './abbegate/quotes/quote-live/quote-live.component';
import { StudioLiveComponent } from './abbegate/studio/studio-live/studio-live.component';

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
  {path:'abbegate/updateSupplier/:id', component:UpdateSupplierComponent},
  {path:'abbegate/newQuote',component:NewQuoteComponent},
  {path:'abbegate/newOrder',component:NewOrderComponent},
  {path:'abbegate/quoteLive',component:QuoteLiveComponent},
  {path:'abbegate/studioLive',component:StudioLiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
