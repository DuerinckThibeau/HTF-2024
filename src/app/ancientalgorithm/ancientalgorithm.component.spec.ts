import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AncientalgorithmComponent } from './ancientalgorithm.component';

describe('AncientalgorithmComponent', () => {
  let component: AncientalgorithmComponent;
  let fixture: ComponentFixture<AncientalgorithmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AncientalgorithmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AncientalgorithmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
