import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomevalueComponent } from './homevalue.component';

describe('HomevalueComponent', () => {
  let component: HomevalueComponent;
  let fixture: ComponentFixture<HomevalueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomevalueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomevalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
