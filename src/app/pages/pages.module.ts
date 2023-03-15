import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PagesRoutingModule } from './pages.routing';
import { PagesComponent } from './pages.component';
import { WeatherAdministrationComponent } from './weather-administration/weather-administration.component';
import { DaysAdministrationComponent } from './days-administration/days-administration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldDate } from '../shared/formly-field-date/formly-field-date.component';
import { FilerWeatherPipe } from './pipes/weather.pipe';

@NgModule({
    declarations: [
        HomeComponent,
        ContactComponent,
        PagesComponent,
        WeatherAdministrationComponent,
        DaysAdministrationComponent,
        FilerWeatherPipe
    ],
    imports: [
        CommonModule,
        SharedModule,
        PagesRoutingModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        FormlyModule.forRoot({
            types: [
                { name: 'date', component: FormlyFieldDate }
            ]
        }),
    ],
    exports: [
        HomeComponent,
        ContactComponent
    ]
})
export class PagesModule { }
