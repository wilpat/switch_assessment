import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CustomersComponent } from './customers/customers.component';
import { ContainerComponent } from './container/container.component';
import { CustomersAdminComponent } from './customers-admin/customers-admin.component';

const routes: Routes = [
  
  { 
    path: '', component: ContainerComponent, 
    children:[
        { path: '', component: LoginComponent },
        { path: 'customers', component: CustomersComponent },
        { path: 'dashboard', component: DashboardComponent },
        { path: 'customers-admin', component: CustomersAdminComponent }
    ] },
  { path: 'login', component: LoginComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {

}