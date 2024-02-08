import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { CompanyCodeListComponent } from './components/companyCode/company-code-list/company-code-list.component';
import { AddCompanyCodeComponent } from './components/companyCode/add-company-code/add-company-code.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from '../modules/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VehicleCategoryListComponent } from './components/vehicleCategory/vehicle-category-list/vehicle-category-list.component';
import { AddVehicleCategoryComponent } from './components/vehicleCategory/add-vehicle-category/add-vehicle-category.component';


@NgModule({
  declarations: [
    CompanyCodeListComponent,
    AddCompanyCodeComponent,
    VehicleCategoryListComponent,
    AddVehicleCategoryComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatTabsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SettingModule { }
