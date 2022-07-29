import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentDataService } from '../student-data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() pdata;
  @Input() pdata2;
  @Input() pAgree;
  @Input() listData;
  childdata;
  studentsData: Student[];
  constructor(private dataService: StudentDataService) { }

  ngOnInit(): void {
    this.childdata = this.pdata + " " + this.pdata2;
    this.studentsData = this.dataService.getDataAbove(300);
  }

  ngOnChanges() {
    console.log(this.pdata)
    this.childdata = this.pdata + " " + this.pdata2;
  }
}
