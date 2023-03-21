import { Component } from '@angular/core';
import { RareCrewTaskService } from './rare-crew-task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  employees: any[];
  displayedColumns: string[] = ['name', 'hoursWorked'];
  highlightColor = '#f2dede';

  constructor(private employeeService: RareCrewTaskService) {}

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((response) => {
      this.employees = response;
    });
  }

  getRowColor(hours: number): string {
    if (hours < 100) {
      return this.highlightColor;
    }
    return '';
  }
}
