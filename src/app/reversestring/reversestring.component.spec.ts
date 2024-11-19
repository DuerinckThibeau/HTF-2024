import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReversestringComponent } from './reversestring.component';

describe('ReversestringComponent', () => {
  let component: ReversestringComponent;
  let fixture: ComponentFixture<ReversestringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReversestringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReversestringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
