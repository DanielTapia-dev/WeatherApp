import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { WeatherCardDayComponent } from './weather-card-day/weather-card-day.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyFieldDate } from './formly-field-date/formly-field-date.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        WeatherCardDayComponent,
        FormlyFieldDate
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        WeatherCardDayComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        RouterModule,
        FormsModule,
        FormlyModule.forRoot({
            types: [
                { name: 'date', component: FormlyFieldDate }
            ]
        }),
        ReactiveFormsModule,
        FormlyBootstrapModule
    ]
})
export class SharedModule { }
