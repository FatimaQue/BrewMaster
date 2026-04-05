import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiscoffMilkshake } from './biscoff-milkshake';

describe('BiscoffMilkshake', () => {
  let component: BiscoffMilkshake;
  let fixture: ComponentFixture<BiscoffMilkshake>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiscoffMilkshake],
    }).compileComponents();

    fixture = TestBed.createComponent(BiscoffMilkshake);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
