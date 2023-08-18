import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachesDetailsComponent } from './coaches.component';

describe('CoachesDetailsComponent', () => {
  let component: CoachesDetailsComponent;
  let fixture: ComponentFixture<CoachesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

