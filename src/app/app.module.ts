import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
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
import { NewCustomerComponent } from './abbegate/new-customer/new-customer.component';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { ViewCustomerComponent } from './abbegate/view-customer/view-customer.component';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { FieldsetModule } from 'primeng/fieldset';
import { UpdateCustomerComponent } from './abbegate/update-customer/update-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CardsComponent,
    AbbegateComponent,
    TrackAndTraceComponent,
    UserProfileComponent,
    AbbegateHeaderComponent,
    NewCustomerComponent,
    ViewCustomerComponent,
    UpdateCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
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
    FieldsetModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
