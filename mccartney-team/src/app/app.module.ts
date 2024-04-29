import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/shared/menus/main-menu/main-menu.component';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { ContactmeComponent } from './components/pages/contactme/contactme.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NewsComponent } from './components/pages/news/news.component';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CaptchaModule} from 'primeng/captcha';
import {MessageService} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import { SocialmediaComponent } from './components/shared/socialmedia/socialmedia.component';
import { PropertysearchComponent } from './components/shared/propertysearch/propertysearch.component';
import { MypropertiesComponent } from './components/pages/myproperties/myproperties.component';
import { LocalpropertiesComponent } from './components/pages/localproperties/localproperties.component';
import { ExpandedpropertiesComponent } from './components/pages/expandedproperties/expandedproperties.component';
import { OpenhousesComponent } from './components/pages/openhouses/openhouses.component';
import {DropdownModule} from 'primeng/dropdown';
import {DialogService} from 'primeng/dynamicdialog';
import {FormsModule} from '@angular/forms';
import { BuyersComponent } from './components/pages/buyers/buyers.component';
import { SellersComponent } from './components/pages/sellers/sellers.component';
import { FinancingComponent } from './components/pages/financing/financing.component';
import {GalleriaModule} from 'primeng/galleria';
import {TeamService} from "./components/common/team-service";
import {TeamStore} from "./components/common/team-store";
import {Constants} from "./components/common/constants";
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';
import { StagingComponent } from './components/pages/staging/staging.component';
import {MortgageCalcComponent} from './components/pages/mortgagecalc/mortgagecalc.component';
import { HomeValueComponent } from './components/pages/homevalue/homevalue.component';


@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    ContactmeComponent,
    AboutComponent,
    NewsComponent,
    SocialmediaComponent,
    PropertysearchComponent,
    MypropertiesComponent,
    LocalpropertiesComponent,
    ExpandedpropertiesComponent,
    OpenhousesComponent,
    BuyersComponent,
    SellersComponent,
    FinancingComponent,
    TestimonialsComponent,
    StagingComponent,
    MortgageCalcComponent,
    HomeValueComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenuModule,
    MenubarModule,
    InputTextModule,
    InputTextareaModule,
    CaptchaModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    GalleriaModule

  ],
  providers: [MessageService, DialogService, TeamStore, TeamService, Constants],
  bootstrap: [AppComponent]
})
export class AppModule { }
