import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotCoco } from './hot-coco';

describe('HotCoco', () => {
  let component: HotCoco;
  let fixture: ComponentFixture<HotCoco>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotCoco],
    }).compileComponents();

    fixture = TestBed.createComponent(HotCoco);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
