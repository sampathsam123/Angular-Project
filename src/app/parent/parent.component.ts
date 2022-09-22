import { Component, OnInit, ViewChild } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
@ViewChild(ChildComponent) viewdata !:ChildComponent //viewchild
  title = " Parent Component"
  inputfirst=''
  inputlast=''
  inputobj={'first':'', 'last':''}

   TransferData(first:any,last:any){
    this.inputfirst=first;
    this.inputlast=last;
    this.inputobj={'first':first ,'last':last} 

    this.viewdata.updatelist(this.inputobj); //viewchild
  }
  constructor() { }

  ngOnInit(): void {
  }

}
