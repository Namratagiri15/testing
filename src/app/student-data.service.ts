import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
  private data: Student[];
  private filteredData: Student[];
  constructor() {
    this.data = [
      {id: 100, name: "Namrata", marks: 500},
      {id: 100, name: "Snehal", marks: 300},
      {id: 100, name: "Nikhil", marks: 600},
      {id: 100, name: "Shreya", marks: 200},
      {id: 100, name: "Apurva", marks: 400},
    ]
  }

  getData() {
    return this.data;
  }

  getDataAbove(marks) {
    this.filteredData = this.data.filter(stud => {
      return stud.marks > marks;
    })
    return this.filteredData;
  }
}
