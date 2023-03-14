import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherAdministrationComponent } from './weather-administration.component';

describe('WeatherAdministrationComponent', () => {
  let component: WeatherAdministrationComponent;
  let fixture: ComponentFixture<WeatherAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherAdministrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
