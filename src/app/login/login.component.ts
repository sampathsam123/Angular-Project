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
  userName: string = '';
  password: string = '';
  errormsg;
  loginForm : FormGroup;
  
  isSubmitted: boolean = false;
  isValidUser: boolean = false;
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
          this._router.navigate(['/card-view']); // If valid and route to card-vew
        }
        else{
          this.isSubmitted=true;
          this.isValidUser= data;
        }
      });
     
  }

  
  CustomerManager(){
    this._router.navigate(['/Customer-Manager']);
  }
  Customers(){
    this._router.navigate(['/list-view'],{relativeTo:this._activatedRoute});
  }
  Login() {
    this._router.navigate(['/login'],{ relativeTo: this._activatedRoute })

  }
  About(){
    this._router.navigate(['/about'],{relativeTo:this._activatedRoute})
  }

}
