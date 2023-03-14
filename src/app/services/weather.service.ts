import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments.prod';
import { WeatherApiResponse } from '../interfaces/weatherApiResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  baseUrl: string = `https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=${environment.apiKey}&lang=es`;

  getWeather(): Observable<WeatherApiResponse> {
    return this.http.get<WeatherApiResponse>(this.baseUrl);
  }

  getCurrentWeather(city: string) {
    return this.http.get(`${environment.urlOpenWeather}/weather?q=${city}&appid=${environment.apiKey}`);
  }

  getWeatherForecast(city: string) {
    return this.http.get(`${environment.urlOpenWeather}/forecast?q=${city}&appid=${environment.apiKey}`);
  }
}
