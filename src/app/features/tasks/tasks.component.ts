import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from './task.model';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

  showForm = false;

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

  newTask: any = {
    title:'',
    status:'Todo',
    priority:'Medium',
    dueDate:''
  }

  addTask(){
    const task ={
      id:Date.now.toString(),
      title:this.newTask.title,
      status:this.newTask.status,
      priority:this.newTask.priority,
      dueDate:this.newTask.dueDate
    };

    this.tasks.push(task);

    this.newTask = {
      title:'',
      status:'Todo',
      priority:'Medium',
      dueDate:''
    }
    this.showForm = false;

  }

  changeStatus(task:any){
    if(task.status == 'Todo'){
      task.status = 'In Progress';
    }else if(task.status == 'In Progress'){
      task.status = 'Done';
    }else{
      task.status = 'Todo';
    }
  }

  toggleForm(){
    this.showForm = !this.showForm;
  }

}
