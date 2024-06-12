import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DuanListComponent } from './duan-list/duan-list.component';
import { DuanThemComponent } from './duan-them/duan-them.component';
import { DuanSuaComponent } from './duan-sua/duan-sua.component';
import { NvListComponent } from './nv-list/nv-list.component';
import { NvThemComponent } from './nv-them/nv-them.component';
import { NvSuaComponent } from './nv-sua/nv-sua.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskThemComponent } from './task-them/task-them.component';
import { TaskSuaComponent } from './task-sua/task-sua.component';
import { NotFoundError } from 'rxjs';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './auth-guard.service';

export const routes: Routes = [
  {path:'',component:HomeComponent,canActivate:[AuthGuardService],title:'Trang chủ'},
  {path:'du-an',component:DuanListComponent,canActivate:[AuthGuardService],title:'Danh sách dự án'},
  {path:'du-an/them',component:DuanThemComponent,canActivate:[AuthGuardService],title:'Thêm dự án'},
  {path:'du-an/sua/:id',component:DuanSuaComponent,canActivate:[AuthGuardService],title:'Sửa dự án'},
  {path:'nhan-vien',component:NvListComponent,canActivate:[AuthGuardService],title:'Danh sách nhân viên'},
  {path:'nhan-vien/them',component:NvThemComponent,canActivate:[AuthGuardService],title:'Thêm nhân viên'},
  {path:'nhan-vien/sua/:id',component:NvSuaComponent,canActivate:[AuthGuardService],title:'Sửa nhân viên'},
  {path:'task',component:TaskListComponent,canActivate:[AuthGuardService],title:'Danh sách task'},
  {path:'task/them',component:TaskThemComponent,canActivate:[AuthGuardService],title:'Thêm task'},
  {path:'task/sua/:id',component:TaskSuaComponent,canActivate:[AuthGuardService],title:'Sửa task'},
  {path:'login',component:LoginComponent,title:'Đăng nhập'},
  {path:'register',component:RegisterComponent,title:'Đăng ký'},
  {path:'***',component:NotFoundComponent,title:'Không tìm thấy'},
];
