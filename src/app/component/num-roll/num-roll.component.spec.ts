import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumRollComponent } from './num-roll.component';

describe('NumRollComponent', () => {
  let component: NumRollComponent;
  let fixture: ComponentFixture<NumRollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumRollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NumRollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
