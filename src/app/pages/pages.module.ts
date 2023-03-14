import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PagesRoutingModule } from './pages.routing';
import { PagesComponent } from './pages.component';
import { WeatherAdministrationComponent } from './weather-administration/weather-administration.component';
import { DaysAdministrationComponent } from './days-administration/days-administration.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        HomeComponent,
        ContactComponent,
        PagesComponent,
        WeatherAdministrationComponent,
        DaysAdministrationComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        PagesRoutingModule,
        RouterModule
    ],
    exports: [
        HomeComponent,
        ContactComponent
    ]
})
export class PagesModule { }