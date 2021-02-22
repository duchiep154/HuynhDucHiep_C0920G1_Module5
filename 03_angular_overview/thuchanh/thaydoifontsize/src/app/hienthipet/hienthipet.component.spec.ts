import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HienthipetComponent } from './hienthipet.component';

describe('HienthipetComponent', () => {
  let component: HienthipetComponent;
  let fixture: ComponentFixture<HienthipetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HienthipetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HienthipetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
