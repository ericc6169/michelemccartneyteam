import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandedpropertiesComponent } from './expandedproperties.component';

describe('ExpandedpropertiesComponent', () => {
  let component: ExpandedpropertiesComponent;
  let fixture: ComponentFixture<ExpandedpropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandedpropertiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpandedpropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
