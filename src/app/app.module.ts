import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MessagesModule } from 'primeng/messages';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { CardsComponent } from './cards/cards.component';
import { CardModule } from 'primeng/card';
import { AbbegateComponent } from './abbegate/abbegate.component';
import { TrackAndTraceComponent } from './track-and-trace/track-and-trace.component';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MenubarModule } from 'primeng/menubar';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AbbegateHeaderComponent } from './abbegate/abbegate-header/abbegate-header.component';
import { NewCustomerComponent } from './abbegate/customer/new-customer/new-customer.component';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { ViewCustomerComponent } from './abbegate/customer/view-customer/view-customer.component';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { FieldsetModule } from 'primeng/fieldset';
import { UpdateCustomerComponent } from './abbegate/customer/update-customer/update-customer.component';
import { NewProductComponent } from './abbegate/product/new-product/new-product.component';
import { ViewProductComponent } from './abbegate/product/view-product/view-product.component';
import { NewSupplierComponent } from './abbegate/supplier/new-supplier/new-supplier.component';
import { ViewSupplierComponent } from './abbegate/supplier/view-supplier/view-supplier.component';
import { UpdateSupplierComponent } from './abbegate/supplier/update-supplier/update-supplier.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { NewQuoteComponent } from './abbegate/quotes/new-quote/new-quote.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { NewOrderComponent } from './abbegate/orders/new-order/new-order.component';
import { QuoteLiveComponent } from './abbegate/quotes/quote-live/quote-live.component';
import { TabViewModule } from 'primeng/tabview';
import { CalendarModule } from 'primeng/calendar';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ChipsModule } from 'primeng/chips';
import { ChipModule } from 'primeng/chip';
import { FileUploadModule } from 'primeng/fileupload';
import { StudioLiveComponent } from './abbegate/studio/studio-live/studio-live.component';
import { GalleriaModule } from 'primeng/galleria';

@NgModule({ declarations: [
        AppComponent,
        LoginComponent,
        CardsComponent,
        AbbegateComponent,
        TrackAndTraceComponent,
        UserProfileComponent,
        AbbegateHeaderComponent,
        NewCustomerComponent,
        ViewCustomerComponent,
        UpdateCustomerComponent,
        NewProductComponent,
        ViewProductComponent,
        NewSupplierComponent,
        ViewSupplierComponent,
        UpdateSupplierComponent,
        NewQuoteComponent,
        NewOrderComponent,
        QuoteLiveComponent,
        StudioLiveComponent
    ],
    bootstrap: [AppComponent], 
    imports: [BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        InputTextModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonModule,
        MessagesModule,
        AvatarModule,
        AvatarGroupModule,
        CardModule,
        FloatLabelModule,
        MenubarModule,
        DropdownModule,
        CheckboxModule,
        TableModule,
        MultiSelectModule,
        ToastModule,
        DialogModule,
        FieldsetModule,
        ConfirmDialogModule,
        InputNumberModule,
        TabViewModule,
        CalendarModule,
        InputIconModule,
        IconFieldModule,
        ChipsModule,
        ChipModule,
        FileUploadModule,
        GalleriaModule
    ], 
    providers: [MessageService, ConfirmationService, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
