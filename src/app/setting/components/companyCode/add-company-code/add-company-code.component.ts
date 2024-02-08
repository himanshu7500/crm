import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-company-code',
  templateUrl: './add-company-code.component.html',
  styleUrls: ['./add-company-code.component.css']
})
export class AddCompanyCodeComponent {

  isShowPadding: any = false
  companyCodeFormData:any=FormGroup
  imageSrc: any = '';
  isSubmitted: any = false;


  constructor(private fb:FormBuilder){}

  handleSideBar(event: any) {
    this.isShowPadding = event
  }

  ngOnInit(): void {
      this.createCompanyCodeData()
  }
  createCompanyCodeData(){
    this.companyCodeFormData=this.fb.group({
      agentId:['',Validators.required],
      companyCode:['',Validators.required],
      companyName:['',Validators.required],
      address:[''],
      country:[''],
      state:[''],
      city:[''],
      pinCode:[''],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      mailId:['',[Validators.required,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')]],
      companyRegistrationNo: [''],
      panNumber:['']
    })
  }

  submitData(){
    this.isSubmitted = true;

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-indexed, so add 1
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    // Format the date and time
    const fullDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    const userName: any = localStorage.getItem('userName')
    this.companyCodeFormData.value.createdOn = fullDate
    this.companyCodeFormData.value.createdBy = userName
    this.companyCodeFormData.value.changedOn = fullDate
    this.companyCodeFormData.value.changedBy = userName;
    console.log(this.companyCodeFormData.value, this.companyCodeFormData.invalid)
  }

  onlyNumberKey(event: any) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
    }
  }


}
