import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { __param } from 'tslib';
interface students{
  id: Number;
  name: String;
  age: Number;
};

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

//public students :students[] = empData ;
public selectedId: any ;
constructor(private _router:Router , private  _activatedRoute : ActivatedRoute ){}

 //   students :any;
 //   public errMsg;
 //  constructor(private _studentService :StudentService) { }

  ngOnInit(){

        this._activatedRoute.queryParams.subscribe((param : {id : string }) =>{
          this.selectedId = param.id;
        });
    }
 //   this._studentService.getStudents().subscribe(res => {
 //     console.log(res);
 //     this.students = res;
 //   })  
  
 onSelect(x){
  // this._router.navigate(['/student-detail'], { queryParams: { id: x.id }});  /*Obsolute navigate  like "/student-detail"*/
    this._router.navigate([x.id],{relativeTo:this._activatedRoute}) /*Relative navigate  like "x.id to related "*/
  } 

isSelected(x){
  return x.id === this.selectedId;
}





}
