import { Component } from '@angular/core';
import OpenWeatherAPI from 'openweather-api-node';
import { WeatherService } from 'src/app/services/weather.service';
import { WeatherApiResponse } from '../../interfaces/weatherApiResponse.interface';

@Component({
  selector: 'app-days-administration',
  templateUrl: './days-administration.component.html',
  styleUrls: ['./days-administration.component.css']
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

  constructor(private weatherServices: WeatherService) { }

  ngOnInit(): void {
    this.loadWeather();
    this.loadWeatherPerDay();
    this.loadWeatherPerWeek();
  }

  loadWeather() {
    this.weatherServices.getWeather().subscribe(res=> {
      console.log(res);
    });
  }

  loadWeatherPerDay() {
    this.weatherServices.getCurrentWeather('Quito').subscribe(res => {
      console.log('Por Dia');
      console.log(res);
    });
  }

  loadWeatherPerWeek() {
    this.weatherServices.getWeatherForecast('Quito').subscribe(res => {
      console.log('Por Semana');
      console.log(res);
    });
  }
}
