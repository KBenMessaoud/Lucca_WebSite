import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeureActuelleComponent } from './heure-actuelle.component';

describe('HeureActuelleComponent', () => {
  let component: HeureActuelleComponent;
  let fixture: ComponentFixture<HeureActuelleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeureActuelleComponent]
    });
    fixture = TestBed.createComponent(HeureActuelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
