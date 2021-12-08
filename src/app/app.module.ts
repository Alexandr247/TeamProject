import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxChartsModule } from '@swimlane/ngx-charts';
// import { NgxChartsModule } from '@swimlane/ngx-charts';
 
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OrdersComponent,
    CustomersComponent,
    ProductsComponent
  ],
  imports: [ 
    NgxChartsModule,
    MatPaginatorModule,
    BrowserModule,
    // AppRoutingModule
    RouterModule.forRoot([
      // {path: '/', component: DashboardComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'orders', component: OrdersComponent},
      {path: 'customers', component: CustomersComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'about', component: AboutComponent}
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
