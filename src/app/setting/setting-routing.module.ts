import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyCodeListComponent } from './components/companyCode/company-code-list/company-code-list.component';
import { AddCompanyCodeComponent } from './components/companyCode/add-company-code/add-company-code.component';
import { VehicleCategoryListComponent } from './components/vehicleCategory/vehicle-category-list/vehicle-category-list.component';
import { AddVehicleCategoryComponent } from './components/vehicleCategory/add-vehicle-category/add-vehicle-category.component';

const routes: Routes = [
  {
    path: 'company-code-list',
    component: CompanyCodeListComponent
  },
  {
    path: 'add-company-code',
    component: AddCompanyCodeComponent
  },
  {
    path: 'vehicle-category-list',
    component: VehicleCategoryListComponent
  },
  {
    path: 'add-vehicle-category',
    component: AddVehicleCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
