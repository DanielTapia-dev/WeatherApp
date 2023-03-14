import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCardDayComponent } from './weather-card-day.component';

describe('WeatherCardDayComponent', () => {
  let component: WeatherCardDayComponent;
  let fixture: ComponentFixture<WeatherCardDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherCardDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherCardDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
