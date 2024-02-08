import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleCategoryListComponent } from './vehicle-category-list.component';

describe('VehicleCategoryListComponent', () => {
  let component: VehicleCategoryListComponent;
  let fixture: ComponentFixture<VehicleCategoryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleCategoryListComponent]
    });
    fixture = TestBed.createComponent(VehicleCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
