import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauArrivantComponent } from './nouveau-arrivant.component';

describe('NouveauArrivantComponent', () => {
  let component: NouveauArrivantComponent;
  let fixture: ComponentFixture<NouveauArrivantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NouveauArrivantComponent]
    });
    fixture = TestBed.createComponent(NouveauArrivantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
