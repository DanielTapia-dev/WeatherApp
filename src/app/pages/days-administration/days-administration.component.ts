import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { WeatherService } from 'src/app/services/weather.service';
import { WeatherApiResponse } from '../../interfaces/weatherApiResponse.interface';

@Component({
  selector: 'app-days-administration',
  templateUrl: './days-administration.component.html',
  styleUrls: ['./days-administration.component.css'],
})
export class DaysAdministrationComponent {

  weatherData: WeatherApiResponse = {
    city: {
      id: 0,
      name: '',
      coord: {
        lat: 0,
        lon: 0
      },
      country: '',
      population: 0,
      timezone: 0
    },
    list: []
  };

  form = new FormGroup({});
  model = {
    city: '',
    date: new Date('2023-03-14')
  };
  fields: FormlyFieldConfig[] = [];

  constructor(private weatherServices: WeatherService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.fields = [
      {
        key: 'city',
        type: 'input',
        templateOptions: {
          label: 'Ciudad',
          placeholder: 'Ingrese el nombre de la ciudad',
          required: true,
        },
      },
      {
        key: 'date',
        type: 'datepicker',
        templateOptions: {
          label: 'Fecha',
          placeholder: 'Ingrese la fecha',
          required: true,
        },
      },
    ];
  }

  loadWeather() {
    this.weatherServices.getWeather().subscribe(res=> {
      console.log(res);
    });
  }

  loadWeatherPerDay() {
    if (this.form.valid) {
      const date = new Date('2023-03-20');
      this.weatherServices.getCurrentWeather(this.model.city, this.model.date).subscribe(res => {
        console.log('Por Dia');
        console.log(res);
      });
    }
  }

  loadWeatherPerWeek() {
    this.weatherServices.getWeatherForecast('Quito').subscribe(res => {
      console.log('Por Semana');
      console.log(res);
    });
  }
}
