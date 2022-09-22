import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() firstdata: any;
  @Input() lastdata: any;
  @Input() objdata:any;
  
  title='Child Component'
  listArray = [{"first":"sampath" , "last":"sam"}];

  constructor() { }

  updatelist(obj:any){           // viewchild
    this.listArray.push(obj);
  }

  ngOnInit(): void {
  }
}
