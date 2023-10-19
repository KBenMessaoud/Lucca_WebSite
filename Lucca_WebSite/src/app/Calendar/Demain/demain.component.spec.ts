import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemainComponent } from './demain.component';

describe('DemainComponent', () => {
  let component: DemainComponent;
  let fixture: ComponentFixture<DemainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemainComponent]
    });
    fixture = TestBed.createComponent(DemainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
