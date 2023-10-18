import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AujComponent } from './auj..component';

describe('AujComponent', () => {
  let component: AujComponent;
  let fixture: ComponentFixture<AujComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AujComponent]
    });
    fixture = TestBed.createComponent(AujComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
