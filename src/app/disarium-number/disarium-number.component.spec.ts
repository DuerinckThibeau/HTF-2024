import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DISARIUMNUMBERComponent } from './disarium-number.component';

describe('DISARIUMNUMBERComponent', () => {
  let component: DISARIUMNUMBERComponent;
  let fixture: ComponentFixture<DISARIUMNUMBERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DISARIUMNUMBERComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DISARIUMNUMBERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
