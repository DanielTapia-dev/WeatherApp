import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysAdministrationComponent } from './days-administration.component';

describe('DaysAdministrationComponent', () => {
  let component: DaysAdministrationComponent;
  let fixture: ComponentFixture<DaysAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaysAdministrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaysAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
