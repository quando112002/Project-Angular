import { IDuAn } from './../idu-an';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DulieuService } from '../dulieu.service';
import { ITask } from '../itask';
import { INhanVien } from '../inhan-vien';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-sua',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './task-sua.component.html',
  styleUrls: ['./task-sua.component.css']
})
export class TaskSuaComponent implements OnInit {
  id: number = 0;
  data: ITask = {} as ITask;
  listNhanVien: INhanVien[] = [];
  listDuAn: IDuAn[] = [];

  constructor(private d: DulieuService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.d.lay1Task(this.id).subscribe({
      next: (ta:any) => {
        console.log("task=", ta);
        this.data = ta as ITask;
        console.log(this.data);

      },
      error: (err) => {
        console.error('Error loading task', err);
      }
    });

    this.d.layNhanVien().subscribe({
      next: (data) => {
        this.listNhanVien = data as INhanVien[];
      },
      error: (err) => {
        console.error('Error loading employees', err);
      }
    });

    this.d.layDuAn().subscribe({
      next: (data) => {
        this.listDuAn = data as IDuAn[];
        console.log(this.listDuAn);

      },
      error: (err) => {
        console.error('Error loading projects', err);
      }
    });
  }

 // Trong DulieuService


// Trong TaskSuaComponent
xuly() {
  this.d.suaTask(this.id ,this.data).subscribe({
    next: (result) => {
      console.log("result=", result);
      alert('Sửa task thành công');
    },
    error: (err) => {
      console.error('Error updating task', err);
      if (err.error && err.error.thongbao) {
        alert(err.error.thongbao);
      } else {
        alert('Đã xảy ra lỗi khi cập nhật task. Vui lòng kiểm tra lại.');
      }
    }
  });
}



}
