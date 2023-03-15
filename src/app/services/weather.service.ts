import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environments.prod';
import { OpenWeather } from '../interfaces/openWeather.interface';
import { WeatherApiResponse } from '../interfaces/weatherApiResponse.interface';
import { WeatherDayApiResponse } from '../interfaces/weatherDayApiResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  httpClient: any;

  key: string = '6TKCU98NUDF9P7LHWLTX9ZND5';

  constructor(private http: HttpClient) { }

  baseUrl: string = `https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=${environment.apiKey}&lang=es`;
  private baseUrlData = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline';

  getWeatherData(city: string, date: Date) {
    const url = `${this.baseUrlData}/${encodeURIComponent(city)}/${date.toISOString()}?unitGroup=metric&key=${this.key}`;
    return this.http.get(url);
  }

  getWeatherDataWeek(city: string, startDate: Date, endDate: Date) {
    const url = `${this.baseUrlData}/${encodeURIComponent(city)}/${encodeURIComponent(startDate.toISOString())}/${encodeURIComponent(endDate.toISOString())}?unitGroup=metric&key=${this.key}`;
    return this.http.get(url);
  }

  getWeatherForecast(city: string) {
    return this.http.get<OpenWeather>(`${environment.urlOpenWeather}/forecast?q=${city}&appid=${environment.apiKey}&lang=es`);
  }

  getWeatherDay(city: string, date: number) {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&dt=${date}&appid=${environment.apiKey}&lang=es&units=metric`;
    return this.http.get(url);
  }

}
