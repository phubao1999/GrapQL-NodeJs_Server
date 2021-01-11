import { Routing } from './app-routing.routing';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { SharedServicesModule } from './shared/shared-service.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageErrorComponent } from './page-error/page-error/page-error.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PageErrorComponent,
    UserComponent,
    AdminComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    SharedModule,
    SharedServicesModule,
    UserModule,
    AdminModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
