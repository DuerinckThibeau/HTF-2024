import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaceStringComponent } from './replace-string.component';

describe('ReplaceStringComponent', () => {
  let component: ReplaceStringComponent;
  let fixture: ComponentFixture<ReplaceStringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplaceStringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReplaceStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
