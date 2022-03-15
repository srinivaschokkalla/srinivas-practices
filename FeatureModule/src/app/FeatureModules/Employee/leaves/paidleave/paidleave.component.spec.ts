import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidleaveComponent } from './paidleave.component';

describe('PaidleaveComponent', () => {
  let component: PaidleaveComponent;
  let fixture: ComponentFixture<PaidleaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidleaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
