import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutcomeUpdateComponent } from './outcome-update.component';

describe('OutcomeUpdateComponent', () => {
  let component: OutcomeUpdateComponent;
  let fixture: ComponentFixture<OutcomeUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutcomeUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutcomeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
