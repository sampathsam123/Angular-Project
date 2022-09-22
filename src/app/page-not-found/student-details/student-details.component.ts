import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';


interface student{
  id: Number;
  name: String;
  age: Number;
};

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})


export class StudentDetailsComponent implements OnInit {

  public studentId:any;

  constructor(private _activatedRoute : ActivatedRoute, private _route : Router){}


//  students: any;
//errMsg ;
//  constructor(private _studentServer: StudentService) { }

  ngOnInit() {

   // let sId = parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
   // this.studentId = sId;
    this._activatedRoute.queryParams.subscribe((params: { id: string}) => {
        this.studentId = params.id }); 
 
 //   this._studentServer.getStudents().subscribe(data => this.students = data ,
//                                             error => this.errMsg = error );
}
toPrevious(){
  debugger;
  let previousId = parseInt(this.studentId) - 1;
  this._route.navigate(['/student-detail'], { queryParams: { id: previousId }});
}
toNext(){
  let nextId = parseInt(this.studentId) + 1;
  this._route.navigate(['/student-detail'], { queryParams: { id: nextId }});

}
toBack(){
  let selectedId = this.studentId ? this.studentId  : null;
 // this._route.navigate(['/student-detail'], { queryParams: { id: selectedId }}); /*Obsolute navigate  like "/student-detail"*/
 this._route.navigate(["../"],{relativeTo : this._activatedRoute}) /*Relative navigate  like "../"*/
}

}
