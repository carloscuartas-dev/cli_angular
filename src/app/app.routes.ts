import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Load components

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { CourseComponent } from './components/course/course.component';
import { ChatroomComponent } from './components/chatroom/chatroom.component';
import { NewsComponent } from './components/news/news.component';
import { ContactComponent } from './components/contact/contact.component';
import { StudentComponent } from './components/student/student.component';
import { TeacherComponent } from './components/teacher/teacher.component';

// Load routes

import { dashboardRoutes } from './components/dashboard/dashboard.routes';
import { aboutRoutes } from './components/about/about.routes';
import { courseRoutes } from './components/course/course.routes';
import { chatroomRoutes } from './components/chatroom/chatroom.routes';
import { newsRoutes } from './components/news/news.routes';
import { contactRoutes } from './components/contact/contact.routes';
import { studentRoutes } from './components/student/student.routes';
import { teacherRoutes } from './components/teacher/teacher.routes';

// Export routes

export const routes : Routes = [
    { 
        path: '', 
        redirectTo: '/dashboard', 
        pathMatch: 'full' 
    },
    ...dashboardRoutes,
    ...aboutRoutes,
    ...courseRoutes,
    ...chatroomRoutes,
    ...newsRoutes,
    ...contactRoutes,
    ...studentRoutes,
    ...teacherRoutes
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
