import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecodestringComponent } from './decodestring.component';

describe('DecodestringComponent', () => {
  let component: DecodestringComponent;
  let fixture: ComponentFixture<DecodestringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecodestringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecodestringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
