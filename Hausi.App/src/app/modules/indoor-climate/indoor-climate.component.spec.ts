import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndoorClimateComponent } from './indoor-climate.component';

describe('IndoorClimateComponent', () => {
  let component: IndoorClimateComponent;
  let fixture: ComponentFixture<IndoorClimateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndoorClimateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndoorClimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
