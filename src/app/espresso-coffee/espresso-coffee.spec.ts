import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspressoCoffee } from './espresso-coffee';

describe('EspressoCoffee', () => {
  let component: EspressoCoffee;
  let fixture: ComponentFixture<EspressoCoffee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspressoCoffee],
    }).compileComponents();

    fixture = TestBed.createComponent(EspressoCoffee);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
