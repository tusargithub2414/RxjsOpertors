import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighChartsCompComponent } from './high-charts-comp.component';

describe('HighChartsCompComponent', () => {
  let component: HighChartsCompComponent;
  let fixture: ComponentFixture<HighChartsCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighChartsCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighChartsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
