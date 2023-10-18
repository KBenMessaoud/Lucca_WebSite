import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurNewArrivantComponent } from './visiteur-new-arrivant.component';

describe('VisiteurNewArrivantComponent', () => {
  let component: VisiteurNewArrivantComponent;
  let fixture: ComponentFixture<VisiteurNewArrivantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisiteurNewArrivantComponent]
    });
    fixture = TestBed.createComponent(VisiteurNewArrivantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
