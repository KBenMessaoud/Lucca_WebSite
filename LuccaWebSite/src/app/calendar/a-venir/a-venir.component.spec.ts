import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AVenirComponent } from './a-venir.component';

describe('AVenirComponent', () => {
  let component: AVenirComponent;
  let fixture: ComponentFixture<AVenirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AVenirComponent]
    });
    fixture = TestBed.createComponent(AVenirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
