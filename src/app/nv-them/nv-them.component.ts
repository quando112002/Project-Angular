import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { INhanVien } from '../inhan-vien';
import { DulieuService } from '../dulieu.service';
@Component({
  selector: 'app-nv-them',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './nv-them.component.html',
  styleUrl: './nv-them.component.css'
})
export class NvThemComponent {

  constructor(private d: DulieuService) {}

  xuly(nv:INhanVien){
    this.d.themNhanVien(nv).subscribe(data =>{
      console.log(nv,data);
      alert("thêm nhân viên thành công")
    })
  }
}
