import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DulieuService } from '../dulieu.service';
import { IDuAn } from '../idu-an';
import { INhanVien } from '../inhan-vien';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-duan-them',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './duan-them.component.html',
  styleUrl: './duan-them.component.css',
})
export class DuanThemComponent {
  listNhanVien :INhanVien[] =[];
  constructor(private d: DulieuService) {}

  ngOnInit():void{
    this.d.layNhanVien().subscribe(data => {
      this.listNhanVien = data as INhanVien[];
    });
  }
  xuly(da: IDuAn): void {
    // Check if thanhVien is an array and convert it to a string
    if (Array.isArray(da.thanhVien)) {
      da.thanhVien = da.thanhVien.join(', ');
    }
    this.d.them1DuAn(da).subscribe(data => {
      console.log(da, data);
      alert("Thêm dự án thành công");
    }, error => {
      console.error("Error:", error);
      // Handle error, e.g., display an error message to the user
      alert("Thêm dự án thất bại: " + error.message);
    });
  }



}
