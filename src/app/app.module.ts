import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './unauthorized/login/login.component';
import {RegisterComponent} from './unauthorized/register/register.component';
import {LostPasswordComponent} from './unauthorized/lost-password/lost-password.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ResendRegistrationComponent} from './unauthorized/resend-registration/resend-registration.component';
import {RegisterSuccessComponent} from './unauthorized/register-success/register-success.component';
import {NavbarComponent} from "./unauthorized/navbar/navbar.component";
import {FooterComponent} from "./unauthorized/footer/footer.component";
import {FeaturesComponent} from "./unauthorized/features/features.component";
import {HelpComponent} from "./unauthorized/help/help.component";
import {HomeComponent} from "./authorized/home/home.component";
import {ProfileComponent} from "./authorized/profile/profile.component";
import {PageNotFoundComponent} from './unauthorized/page-not-found/page-not-found.component';
import {AuthenticationInterceptor} from "./shared/interceptor/authentication.interceptor";
import {AuthenticationService} from "./shared/service/authentication.service";
import {ProfileService} from "./shared/service/profile.service";
import { PostgresqlComponent } from './authorized/postgresql/postgresql.component';
import { HistoryComponent } from './authorized/history/history.component';
import { FreemiumComponent } from './unauthorized/freemium/freemium.component';
import { AwsElasticComputingCloudComponent } from './child-component/aws-elastic-computing-cloud/aws-elastic-computing-cloud.component';
import { AzureVirtualMachineComponent } from './child-component/azure-virtual-machine/azure-virtual-machine.component';
import { GcpCloudSqlComponent } from './child-component/gcp-cloud-sql/gcp-cloud-sql.component';
import { AzurePostgresqlComponent } from './child-component/azure-postgresql/azure-postgresql.component';
import { AwsRelationalDatabaseComponent } from './child-component/aws-relational-database-service/aws-relational-database.component';
import {GcpComputeEngineComponent} from "./child-component/gcp-compute-engine/gcp-compute-engine.component";
import { AzureVmCalculateComponent } from './child-component/azure-vm-calculate/azure-vm-calculate.component';
import { GcpVmCalculateComponent } from './child-component/gcp-vm-calculate/gcp-vm-calculate.component';
import { AwsVmCalculateComponent } from './child-component/aws-vm-calculate/aws-vm-calculate.component';
import { AwsPostgresqlCalculateComponent } from './child-component/aws-postgresql-calculate/aws-postgresql-calculate.component';
import { GcpPostgresqlCalculateComponent } from './child-component/gcp-postgresql-calculate/gcp-postgresql-calculate.component';
import { AzurePostgresqlCalculateComponent } from './child-component/azure-postgresql-calculate/azure-postgresql-calculate.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LostPasswordComponent,
    ResendRegistrationComponent,
    RegisterSuccessComponent,
    NavbarComponent,
    FooterComponent,
    FeaturesComponent,
    HelpComponent,
    HomeComponent,
    ProfileComponent,
    PageNotFoundComponent,
    PostgresqlComponent,
    HistoryComponent,
    FreemiumComponent,
    GcpComputeEngineComponent,
    AwsElasticComputingCloudComponent,
    AzureVirtualMachineComponent,
    GcpCloudSqlComponent,
    AzurePostgresqlComponent,
    AwsRelationalDatabaseComponent,
    AzureVmCalculateComponent,
    GcpVmCalculateComponent,
    AwsVmCalculateComponent,
    AwsPostgresqlCalculateComponent,
    GcpPostgresqlCalculateComponent,
    AzurePostgresqlCalculateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthenticationService,
    ProfileService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
