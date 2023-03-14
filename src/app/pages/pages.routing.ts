import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PagesComponent } from './pages.component';
import { WeatherAdministrationComponent } from './weather-administration/weather-administration.component';
import { DaysAdministrationComponent } from './days-administration/days-administration.component';

const routes: Routes = [
    {
        path: 'pages',
        component: PagesComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'weatherAdministration', component: WeatherAdministrationComponent },
            { path: 'daysAdministration', component: DaysAdministrationComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }