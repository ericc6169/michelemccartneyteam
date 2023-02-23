import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalpropertiesComponent } from './localproperties.component';

describe('LocalpropertiesComponent', () => {
  let component: LocalpropertiesComponent;
  let fixture: ComponentFixture<LocalpropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalpropertiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalpropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
