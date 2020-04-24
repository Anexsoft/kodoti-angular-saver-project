import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutcomeCreateComponent } from './outcome-create.component';

describe('OutcomeCreateComponent', () => {
  let component: OutcomeCreateComponent;
  let fixture: ComponentFixture<OutcomeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutcomeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutcomeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
