import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-card-day',
  templateUrl: './weather-card-day.component.html',
  styleUrls: ['./weather-card-day.component.css']
})
export class WeatherCardDayComponent{
  @Input() day!: string;
  @Input() image!: string;
  @Input() description?: string;
  @Input() minTemp!: number;
  @Input() maxTemp!: number;
  @Input() humidity!: number;
  @Input() conditions!: string;
}
