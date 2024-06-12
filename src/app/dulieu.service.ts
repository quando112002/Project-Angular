import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDuAn } from './idu-an';
import { INhanVien } from './inhan-vien';
import { ITask } from './itask';
@Injectable({
  providedIn: 'root',
})
export class DulieuService {
  private apiUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  // Dự án
  layDuAn() {
    return this.http.get(`${this.apiUrl}/du_an`);
  }

  lay1DuAn(id: number = 0) {
    return this.http.get(`${this.apiUrl}/du_an/${id}`);
  }

  them1DuAn(da: IDuAn) {
    return this.http.post(`${this.apiUrl}/du_an`, da);
  }

  xoaDuAn(id: number) {
    return this.http.delete(`${this.apiUrl}/du_an/${id}`);
  }

  sua1DuAn(da: IDuAn) {
    return this.http.put(`${this.apiUrl}/du_an/${da.id}`, da);
  }

  // Nhân viên
  layNhanVien() {
    return this.http.get(`${this.apiUrl}/nhan_vien`);
  }

  lay1NhanVien(id: number = 0) {
    return this.http.get(`${this.apiUrl}/nhan_vien/${id}`);
  }

  themNhanVien(nv: INhanVien) {
    return this.http.post(`${this.apiUrl}/nhan_vien`, nv);
  }

  suaNhanVien(id: number = 0,nv: INhanVien) {
    return this.http.put(`${this.apiUrl}/nhan_vien/${nv.id}`, nv);
  }

  // Task
  themTask(ta: ITask) {
    return this.http.post(`${this.apiUrl}/task`, ta);
  }

  layTask() {
    return this.http.get(`${this.apiUrl}/task`);
  }

  lay1Task(id: number) {
    return this.http.get<ITask>(`${this.apiUrl}/task/${id}`);
  }

  suaTask(id: number = 0,task: ITask){
    return this.http.put(`${this.apiUrl}/task/${task.id}`, task);
  }
}
