import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  basinInformationForm: FormGroup
  submitted: Boolean = false;
  states = [
    'ANDAMAN & NICOBAR ISLANDS',
    ' ANDHRA PRADESH',
    'ARUNACHAL PRADESH',
    'ASSAM',
    'BIHAR',
    'CHANDIGARH',
    'CHHATTISGARH',
    'DADRA & NAGAR HAVELI',
    'DAMAN & DIU',
    'DELHI',
    'GOA',
    'GUJARAT',
    'HARYANA',
    ' HIMACHAL PRADESH',
    ' JAMMU & KASHMIR',
    'JHARKHAND',
    'KARNATAKA',
    'KERALA',
    'LAKSHADWEEP',
    'MADHYA PRADESH',
    'MAHARASHTRA',
    'MANIPUR',
    'MEGHALAYA',
    'MIZORAM',
    'NAGALAND',
    'ODISHA',
    'PUDUCHERRY',
    'PUNJAB',
    'RAJASTHAN',
    'SIKKIM',
    ' TAMIL NADU',
    'TELANGANA',
    'TRIPURA',
    'UTTAR PRADESH',
    'UTTARAKHAND',
    ' WEST BENGAL',
  ];


  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.basinInformationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      workExperience: this.formBuilder.array([
        this.formBuilder.group({
          companyName: ['Talentica Software', Validators.required],
          role: ['Web Developer', Validators.required],
          experience: ['36', Validators.required],
        }),
      ]),
    })
  }

  get f() {
    return this.basinInformationForm.value
  }

  get workExperienceArr() {
    return this.basinInformationForm.get('workExperience') as FormArray;
  }

  addNewRow() {
    this.workExperienceArr.push(this.initWorkExperienceNewRow());
  }

  initWorkExperienceNewRow() {
    return this.formBuilder.group({
      companyName: ['', Validators.required],
      role: ['', Validators.required],
      experience: ['', Validators.required],
    }, );
  }

  deleteWorkExperience(index) {
      this.workExperienceArr.removeAt(index);
  }

  onSubmit() {
    console.log('f', this.f)
    console.log('this.b', this.basinInformationForm)
    this.submitted = true;
    if (this.basinInformationForm.invalid) {
      return;
    }

  }

}
