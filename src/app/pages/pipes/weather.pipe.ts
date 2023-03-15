import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterweather'
})
export class FilerWeatherPipe implements PipeTransform {

    transform(value: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any): any {
        const weathers = [];
        for (const weather of value) {
            if ((weather.dt_txt.toLowerCase().indexOf(arg1.toLowerCase()) > -1) &&
                (weather.weather[0].description.toLowerCase().indexOf(arg2.toLowerCase()) > -1) &&
                (weather.main.temp.toString().toLowerCase().indexOf(arg3.toLowerCase()) > -1) &&
                (weather.main.humidity.toString().toLowerCase().indexOf(arg4.toLowerCase()) > -1) &&
                (weather.visibility.toString().toLowerCase().indexOf(arg5.toLowerCase()) > -1) &&
                (weather.wind.speed.toString().toLowerCase().indexOf(arg6.toLowerCase()) > -1)) {
                weathers.push(weather);
            }
        }
        return weathers;
    }

}
