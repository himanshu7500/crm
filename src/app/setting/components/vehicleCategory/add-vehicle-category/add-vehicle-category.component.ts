import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-vehicle-category',
  templateUrl: './add-vehicle-category.component.html',
  styleUrls: ['./add-vehicle-category.component.css']
})
export class AddVehicleCategoryComponent {

  vehicleCategoryData: any = FormGroup;
  isSubmitted: any = false;
  isShowPadding: any = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.data()
  }

  handleSideBar(event: any) {
    this.isShowPadding = event
  }


  data() {
    this.vehicleCategoryData = this.fb.group({
      vehicleCategory: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
      description: ['', Validators.required],

    });

  }

  submitData(){
    console.log(this.data)
  }

}
