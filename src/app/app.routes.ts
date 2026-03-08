import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout/layout.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { TasksComponent } from './features/tasks/tasks.component';
import { ProjectsComponent } from './features/projects/projects.component';

export const routes: Routes = [
    {
        path:'',
        component: LayoutComponent,
        children:[
            {path:'',redirectTo:'dashboard',pathMatch:'full'},
            {path:'dashboard', component:DashboardComponent},
            {path:'tasks',component:TasksComponent},
            {path:'projects',component:ProjectsComponent}
        ]
    }
];
