import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvosComponent } from './salvos.component';

describe('SalvosComponent', () => {
  let component: SalvosComponent;
  let fixture: ComponentFixture<SalvosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalvosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
