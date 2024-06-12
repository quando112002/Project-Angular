import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { INhanVien } from '../inhan-vien';
import { DulieuService } from '../dulieu.service';
import { IDuAn } from '../idu-an';
import { ITask } from '../itask';

@Component({
  selector: 'app-task-them',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './task-them.component.html',
  styleUrls: ['./task-them.component.css'], // Corrected property name
})
export class TaskThemComponent {
  listNhanVien: INhanVien[] = [];
  listDuAn: IDuAn[] = [];

  constructor(private d: DulieuService) {}

  ngOnInit(): void {
    this.d.layNhanVien().subscribe((data) => {
      this.listNhanVien = data as INhanVien[];
    });
    this.d.layDuAn().subscribe((data) => {
      this.listDuAn = data as IDuAn[];
    });
  }

  xuly(ta: ITask): void {
    this.d.themTask(ta).subscribe(result => {
      console.log(ta, result);
      alert('Thêm task thành công');
    });
  }
}

