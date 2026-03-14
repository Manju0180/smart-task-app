import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from './task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

  tasks: Task[]=[
    {
      id: '1',
      title: 'Design Login Page',
      status: 'Todo',
      priority: 'High',
      dueDate: '2026-03-20'
    },
    {
      id: '2',
      title: 'Fix API Integration',
      status: 'In Progress',
      priority: 'Medium',
      dueDate: '2026-03-18'
    },
    {
      id: '3',
      title: 'Create Dashboard Charts',
      status: 'Done',
      priority: 'Low',
      dueDate: '2026-03-15'
    }
  ];

}
