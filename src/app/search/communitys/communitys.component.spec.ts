import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitysComponent } from './communitys.component';

describe('CommunitysComponent', () => {
  let component: CommunitysComponent;
  let fixture: ComponentFixture<CommunitysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommunitysComponent]
    });
    fixture = TestBed.createComponent(CommunitysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
