import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { RouteReuseStrategy } from "@angular/router";
import {
  MDDS_ROUTE_REUSE_RUIs,
  MddsRouteReuseStrategy,
} from "@hicoder/angular-core";
import { route_reuse_uris } from "./injection-tokens/reuse-strategy.conf";

import { AuthenticationModule } from "@hicoder/angular-auth";
import { AUTHENTICATION_INTERFACES } from "@hicoder/angular-auth";
import { authentication_interfaces } from "./injection-tokens/auth.conf";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UsersModule } from "./users/users.module";
import { HomeModule } from "./home/home.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AuthenticationModule,
    UsersModule,
    HomeModule,
  ],
  providers: [
    { provide: AUTHENTICATION_INTERFACES, useValue: authentication_interfaces },
    { provide: MDDS_ROUTE_REUSE_RUIs, useValue: route_reuse_uris },
    { provide: RouteReuseStrategy, useClass: MddsRouteReuseStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
