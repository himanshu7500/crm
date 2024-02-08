import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.css']
})
export class AddAgentComponent implements OnInit{
  isShowPadding: any = false
  agentFormData:any=FormGroup
  imageSrc: any = '';
  isSubmitted: any = false;


  constructor(private fb:FormBuilder){}

  handleSideBar(event: any) {
    this.isShowPadding = event
  }

  ngOnInit(): void {
      this.createAgentData()
  }
  createAgentData(){
    this.agentFormData=this.fb.group({
      agentId:['',Validators.required],
      agentName:['',Validators.required],
      category:['',Validators.required],
      address:[''],
      country:[''],
      state:[''],
      city:[''],
      pinCode:[''],
      mobile:['',Validators.required],
      mailId:['',[Validators.required,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')]],
      aadharNumber:['',Validators.required],
      panNumber:['',Validators.required],

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
    this.agentFormData.value.createdOn = fullDate
    this.agentFormData.value.createdBy = userName
    this.agentFormData.value.changedOn = fullDate
    this.agentFormData.value.changedBy = userName;
    console.log(this.agentFormData.value, this.agentFormData.invalid)
  }
}
