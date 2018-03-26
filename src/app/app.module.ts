import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './auth/auth.service';

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from 'selenium-webdriver/http';
import { ApiService } from './core/api.service';
import { LoadingComponent } from './core/loading.component';

import { DatePipe } from '@angular/common';
import { UtilsService } from './core/utils.service';
import { FilterSortService } from './core/filter-sort.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    HeaderComponent,
    FooterComponent,
    LoadingComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [Title, AuthService, ApiService, DatePipe, UtilsService, FilterSortService],
  bootstrap: [AppComponent]
})
export class AppModule {}
