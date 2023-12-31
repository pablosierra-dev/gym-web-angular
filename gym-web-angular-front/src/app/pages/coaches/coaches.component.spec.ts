import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachListComponent } from './coaches.component';

describe('CoachesListComponent', () => {
  let component: CoachListComponent;
  let fixture: ComponentFixture<CoachListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

