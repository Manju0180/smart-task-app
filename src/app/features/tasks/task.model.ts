export interface Task{
id:String;
title:String;
status:'Todo' | 'In Progress' | 'Done';
priority: 'Low' | 'Medium' | 'High';
dueDate: string;
}