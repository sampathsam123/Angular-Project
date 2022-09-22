import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css'],
  
})
export class TdfComponent implements OnInit {
  registerForm: FormGroup;
    submitted = false;
  
  userName;
  formdata;
  constructor(private formbuilder:FormBuilder) { 
   
  }

  ngOnInit(): void {
// this.registerForm = this.formbuilder.group({
//   email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
//   password: ['', [Validators.required, Validators.minLength(6)]]
// })

    this.formdata =new FormGroup({
      userName: new FormControl("",)
    });
  }


  onClicksubmit(data){
        this.userName = data.userName;
        console.log(data);

  }



  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }




  onclickSubmit(result){
    console.log("you have enterd : " + result.username)
  }

 
}
