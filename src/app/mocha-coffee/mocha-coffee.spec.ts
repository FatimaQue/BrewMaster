import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MochaCoffee } from './mocha-coffee';

describe('MochaCoffee', () => {
  let component: MochaCoffee;
  let fixture: ComponentFixture<MochaCoffee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MochaCoffee],
    }).compileComponents();

    fixture = TestBed.createComponent(MochaCoffee);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
