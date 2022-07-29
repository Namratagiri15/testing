import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentDataService } from '../student-data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  data1;
  data2;
  checkData;
  listName;
  allData = [];
  studentData: Student[];
  constructor(private dataService: StudentDataService) { }

  ngOnInit(): void {
    this.studentData = this.dataService.getData();
  }

  onSend(pdata1, pdata2) {
    this.data1 = pdata1.value;
    this.data2 = pdata2.value;
  }

  onSendList(list) {
    this.listName = list.value;
    this.allData.push(this.listName);
  }

  onCheck(val) {
    if (val.value) {
      this.checkData = true;
    }
  }

}
