import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeureComponent } from './heure.component';

describe('HeureComponent', () => {
  let component: HeureComponent;
  let fixture: ComponentFixture<HeureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeureComponent]
    });
    fixture = TestBed.createComponent(HeureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
