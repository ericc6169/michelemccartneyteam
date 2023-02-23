import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './components/pages/homepage/homepage.component';
import {ContactmeComponent} from "./components/pages/contactme/contactme.component";
import {AboutComponent} from "./components/pages/about/about.component";
import {NewsComponent} from "./components/pages/news/news.component";
import {MypropertiesComponent} from "./components/pages/myproperties/myproperties.component";
import {LocalpropertiesComponent} from "./components/pages/localproperties/localproperties.component";
import {ExpandedpropertiesComponent} from "./components/pages/expandedproperties/expandedproperties.component";
import {OpenhousesComponent} from "./components/pages/openhouses/openhouses.component";
import {BuyersComponent} from "./components/pages/buyers/buyers.component";
import {SellersComponent} from "./components/pages/sellers/sellers.component";
import {FinancingComponent} from "./components/pages/financing/financing.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomepageComponent, pathMatch: 'full'},
  {path: 'about', component: AboutComponent, pathMatch: 'full'},
  {path: 'news', component: NewsComponent, pathMatch: 'full'},
  {path: 'contact', component: ContactmeComponent, pathMatch: 'full'},
  {path: 'myListings', component: MypropertiesComponent, pathMatch: 'full'},
  {path: 'local', component: LocalpropertiesComponent, pathMatch: 'full'},
  {path: 'expListings', component: ExpandedpropertiesComponent, pathMatch: 'full'},
  {path: 'openHouses', component: OpenhousesComponent, pathMatch: 'full'},
  {path: 'buyer', component: BuyersComponent, pathMatch: 'full'},
  {path: 'seller', component: SellersComponent, pathMatch: 'full'},
  {path: 'financing', component: FinancingComponent, pathMatch: 'full'},
  {path: '**', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
