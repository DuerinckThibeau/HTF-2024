import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstlastdaymonthComponent } from './firstlastdaymonth.component';

describe('FirstlastdaymonthComponent', () => {
  let component: FirstlastdaymonthComponent;
  let fixture: ComponentFixture<FirstlastdaymonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstlastdaymonthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstlastdaymonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
