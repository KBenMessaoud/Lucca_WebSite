import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauxArrivantsComponent } from './nouveaux-arrivants.component';

describe('NouveauxArrivantsComponent', () => {
  let component: NouveauxArrivantsComponent;
  let fixture: ComponentFixture<NouveauxArrivantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NouveauxArrivantsComponent]
    });
    fixture = TestBed.createComponent(NouveauxArrivantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
