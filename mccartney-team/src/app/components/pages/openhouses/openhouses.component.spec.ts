import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenhousesComponent } from './openhouses.component';

describe('OpenhousesComponent', () => {
  let component: OpenhousesComponent;
  let fixture: ComponentFixture<OpenhousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenhousesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenhousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
