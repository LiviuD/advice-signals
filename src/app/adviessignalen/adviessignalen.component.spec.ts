import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviessignalenComponent } from './adviessignalen.component';

describe('AdviessignalenComponent', () => {
  let component: AdviessignalenComponent;
  let fixture: ComponentFixture<AdviessignalenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdviessignalenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdviessignalenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
