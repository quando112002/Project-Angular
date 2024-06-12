import { Component } from '@angular/core';
import { INhanVien } from '../inhan-vien';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nv-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterLink],
  templateUrl: './nv-list.component.html',
  styleUrl: './nv-list.component.css',
})
export class NvListComponent {
  url = 'http://localhost:3000/nhan_vien';
  list_Nv: INhanVien[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.loadDataList();
  }

  loadDataList(): void {
    this.httpClient.get<INhanVien[]>(this.url).subscribe((data) => {
      this.list_Nv = data;
      console.log(this.list_Nv);
    });
  }
  onDelete(id: string) {
    let confirmDelete: any = confirm('Bạn chắc chắn muốn xoá chứ ?');
    if (confirmDelete) {
      this.httpClient.delete(this.url + '/' + id).subscribe((data) => {
        this.loadDataList();
      });
    } else {
      return;
    }
  }
}
