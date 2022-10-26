import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder,FormControl,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public  userName: string = '';
public  password: string = '';
public  loginForm : FormGroup;
public  isSubmitted: boolean = false;
public  isValidUser: boolean = false;
  form: FormGroup = new FormGroup({});

  constructor(private _router: Router, 
              private _activatedRoute: ActivatedRoute,
              private formBuilder:FormBuilder, 
              private authService:AuthService) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      email:new FormControl('',[Validators.required ,Validators.email]),
      password:new FormControl('',[Validators.required]),
    });
  }

  onSubmit(){
      this.authService
      .login(this.form.value.email,this.form.value.password)
      .subscribe(data=>{
        if(data){
          this._router.navigate(['/card-view']); 
        }
        else{
          this.isSubmitted=true;
          this.isValidUser= data;
        }
      });
     
  }

}
