import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { WeatherData } from 'src/app/interfaces/cardWeather.interface';
import { TranslationResponse } from 'src/app/interfaces/transalationResponse.interface';
import { WeatherService } from 'src/app/services/weather.service';
import Swal from 'sweetalert2';
import { WeatherApiResponse } from '../../interfaces/weatherApiResponse.interface';
import { GoogleTranslateService } from '../../services/google-translate-service.service';

@Component({
  selector: 'app-days-administration',
  templateUrl: './days-administration.component.html',
  styleUrls: ['./days-administration.component.css']
})
export class DaysAdministrationComponent {

  day: string = '';
  image: string = '';
  description: string = '';
  minTemp: string = '';
  maxTemp: string = '';
  humidity: string = '';
  conditions: string = '';
  searchDay: boolean = true;
  searchWeek: boolean = false;
  weatherCardList: WeatherData[] = [];
  form = new FormGroup({});
  fields: FormlyFieldConfig[] = [
    {
      key: 'city',
      type: 'input',
      templateOptions: {
        label: 'Ciudad:',
        required: true,
      },
      name: 'city'
    },
    {
      key: 'date',
      type: 'date',
      templateOptions: {
        label: 'Fecha:',
        required: true,
      },
    },
  ];

  constructor(private weatherServices: WeatherService, private translateService: GoogleTranslateService, private fb: FormBuilder) {
  }

  ngOnInit(): void {

  }

  /**
 * This class retrieves weather data from Visual Crossing services and displays custom weather cards for each day and week.
 */
  loadWeatherPerDay() {
    const city = this.form.get('city')?.value;
    let date = this.form.get('date')?.value || '';
    const currentDay = new Date(date);
    const unixTime = currentDay.getTime() / 1000;
    if (date === undefined) {
      Swal.fire({
        icon: 'error',
        title: 'Debe ingresar una fecha'
      });
    }
    if (this.form.valid) {
      if (this.searchDay) {
        this.weatherServices.getWeatherData(city!, currentDay).subscribe((res: any) => {
          this.weatherCardList = [];
          for (let weatherDays = 0; weatherDays < res.days.length; weatherDays++) {
            this.translateService.translateText(res.days[weatherDays].description, res.days[weatherDays].conditions, 'es').subscribe((text: TranslationResponse) => {
              this.weatherCardList.push({
                day: date,
                image: `${res.days[weatherDays].icon}.png`,
                description: text.data.translations[0].translatedText,
                conditions: text.data.translations[1].translatedText,
                minTemp: res.days[weatherDays].tempmin,
                maxTemp: res.days[weatherDays].tempmax,
                humidity: res.days[weatherDays].humidity
              });
            });
          }
        });
      } else {
        const endDate = this.getEndDayOfWeek(currentDay);
        console.log(endDate);
        this.weatherServices.getWeatherDataWeek(city!, currentDay, endDate).subscribe((res: any) => {
          console.log(res);
          this.weatherCardList = [];
          for (let weatherDays = 0; weatherDays < res.days.length; weatherDays++) {
            this.translateService.translateText(res.days[weatherDays].description, res.days[weatherDays].conditions, 'es').subscribe((text: TranslationResponse) => {
              this.weatherCardList.push({
                day: res.days[weatherDays].datetime,
                image: `${res.days[weatherDays].icon}.png`,
                description: text.data.translations[0].translatedText,
                conditions: text.data.translations[1].translatedText,
                minTemp: res.days[weatherDays].tempmin,
                maxTemp: res.days[weatherDays].tempmax,
                humidity: res.days[weatherDays].humidity
              });
              if (weatherDays == res.days.length - 1) {
                this.weatherCardList.sort((a, b) => new Date(a.day).getTime() - new Date(b.day).getTime());
              }
            });
          }
        });
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'El formulario no es valido.'
      });
    }
  }

  /*
 Change the weather query from day to week
 */
  changeSearch(searchMode: string) {
    if (searchMode === 'day') {
      this.searchWeek = true;
      return this.searchDay = false;
    }
    this.searchWeek = false;
    return this.searchDay = true;
  }

  /*
  Get the last day of the week
 */
  getEndDayOfWeek(date: Date): Date {
    const sixDayOnMiliSeconds = 6 * 24 * 60 * 60 * 1000;
    const dateSixDaysLater = new Date(date.getTime() + sixDayOnMiliSeconds);
    return dateSixDaysLater;
  }
}
