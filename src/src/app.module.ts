import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AppHeaderComponent } from './header/header.component';
import { SideNavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthModule } from './auth/auth.module';
/*import { GridlinkComponent } from './common/gridlink/gridlink.component';*/
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { LoaderInterceptor } from './services/loader.interceptor';
import { CommonComponentModule } from './common/common-component/common-component.module';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { CustomersModule } from './customers/customers.module';
import { AddpaymentComponent } from './payments/add-edit/addpayment/addpayment.component';
import { DynamicformComponent } from './dynamicform/dynamicform.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AppHeaderComponent,
    SideNavComponent,
    FooterComponent,
    DashboardComponent,
    /*DynamicformComponent,*/
    AddpaymentComponent,
    /*GridlinkComponent*/
    /*LinkDirective*/
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AuthModule,
    CommonComponentModule,
    NgbModule,
    CustomersModule
    /*NgxDatatableModule,*/
    //RouterModule.forRoot([
    //  //{ path: '', component: HomeComponent, pathMatch: 'full' },
    //  //{ path: 'counter', component: CounterComponent },
    //  //{ path: 'fetch-data', component: FetchDataComponent },
    //  { path: 'dashboard', component: DashboardComponent },
    //  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
    //  //{ path: 'counter', component: CounterComponent },
    //  //{ path: 'fetch-data', component: FetchDataComponent },
    //])
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  providers: [AddCustomerComponent, AddpaymentComponent, NgbActiveModal, { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
  entryComponents: [AddCustomerComponent, AddpaymentComponent, DynamicformComponent]
})
export class AppModule { }
