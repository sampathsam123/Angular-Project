import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators,NgForm, FormBuilder} from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-rf',
  templateUrl: './rf.component.html',
  styleUrls: ['./rf.component.css']
})
export class RfComponent implements OnInit{
  isSubmitted: boolean = false;
  isValidUser: boolean = false;
  form: FormGroup = new FormGroup({});

  constructor( private fb: FormBuilder,private router: Router, private authService: AuthService ) { }

  ngOnInit(){
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  onSubmit() {
    this.authService
      .login(this.form.value.email, this.form.value.password)
      .subscribe((data) => {
        if (data) {
          this.router.navigate(['/card-view']);  // If valid and route to card
        }
        this.isSubmitted = true;
        this.isValidUser = data; // false show error message
      });
  }

}

