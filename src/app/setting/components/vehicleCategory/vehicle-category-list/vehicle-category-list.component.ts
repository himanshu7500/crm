import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-category-list',
  templateUrl: './vehicle-category-list.component.html',
  styleUrls: ['./vehicle-category-list.component.css']
})
export class VehicleCategoryListComponent {
  isShowPadding: any = false
  
  constructor(private router:Router){}
    handleSideBar(event: any) {
      this.isShowPadding = event
    }
    nextPage(url: any) {
      this.router.navigate([`${url}`])
    }
}
