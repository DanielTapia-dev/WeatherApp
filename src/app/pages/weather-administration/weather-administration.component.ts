import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { OpenWeather } from 'src/app/interfaces/openWeather.interface';
import { GoogleTranslateService } from 'src/app/services/google-translate-service.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-administration',
  templateUrl: './weather-administration.component.html',
  styleUrls: ['./weather-administration.component.css']
})
export class WeatherAdministrationComponent {

  weatherList: any[] = [];
  filterWeatherFecha = '';
  filterWeatherDescripcion = '';
  filterWeatherTemperatura = '';
  filterWeatherHumedad = '';
  filterWeatherVisibilidad = '';
  filterWeatherspeed = '';
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
    }
  ];

  constructor(private weatherServices: WeatherService, private translateService: GoogleTranslateService) {

  }

  ngOnInit() {

  }

  loadWeather(){
    const city = this.form.get('city')?.value;
    if (this.form.valid) {
      this.weatherServices.getWeatherForecast(city!).subscribe((weather: OpenWeather) => {
        this.weatherList = weather.list;
        console.log(this.weatherList);
      });
    }
  }
}
