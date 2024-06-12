import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DulieuService } from '../dulieu.service';
import { IDuAn } from '../idu-an';
import { INhanVien } from '../inhan-vien';
@Component({
  selector: 'app-duan-sua',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './duan-sua.component.html',
  styleUrl: './duan-sua.component.css',
})
export class DuanSuaComponent {
  id: number = 0;
  data: IDuAn = <IDuAn>{};
  listNhanVien: INhanVien[] = [];

  constructor(private d: DulieuService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = Number(this.router.snapshot.paramMap.get('id'));
    this.d.layNhanVien().subscribe((data) => {
      this.listNhanVien = data as INhanVien[];
    });
    this.d.lay1DuAn(this.id).subscribe((da) => {
      console.log('da=', da);
      this.data = da as IDuAn;
      this.data.ngayStart = this.formatDate(this.data.ngayStart);
    });
  }
  xuly() {

     // Check if thanhVien is an array and convert it to a string
     if (Array.isArray(this.data.thanhVien)) {
      this.data.thanhVien = this.data.thanhVien.join(', ');
    }
    this.d.sua1DuAn(this.data).subscribe((result) => {
      console.log("result=",result);
      alert("Sửa dự án thành công")
    });
  }
  formatDate(date: string): string {
    const d = new Date(date);
    const month = ('0' + (d.getMonth() + 1)).slice(-2); // Thêm số 0 nếu tháng nhỏ hơn 10
    const day = ('0' + d.getDate()).slice(-2); // Thêm số 0 nếu ngày nhỏ hơn 10
    const year = d.getFullYear();

    return `${year}-${month}-${day}`;
  }

  // Getter và setter cho ngayStart
  get ngayStart(): string {
    return this.data.ngayStart;
  }

  set ngayStart(value: string) {
    this.data.ngayStart = value;
  }
}
