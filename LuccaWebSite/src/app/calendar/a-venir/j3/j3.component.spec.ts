import { ComponentFixture, TestBed } from '@angular/core/testing';

import { J3Component } from './j3.component';

describe('J3Component', () => {
  let component: J3Component;
  let fixture: ComponentFixture<J3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [J3Component]
    });
    fixture = TestBed.createComponent(J3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
