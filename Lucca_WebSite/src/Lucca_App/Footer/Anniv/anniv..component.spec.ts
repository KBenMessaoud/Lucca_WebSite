import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnivComponent } from './anniv..component';

describe('AnnivComponent', () => {
  let component: AnnivComponent;
  let fixture: ComponentFixture<AnnivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnivComponent]
    });
    fixture = TestBed.createComponent(AnnivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
