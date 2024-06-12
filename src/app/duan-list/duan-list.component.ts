import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IDuAn } from '../idu-an';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-duan-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink],
  templateUrl: './duan-list.component.html',
  styleUrls: ['./duan-list.component.css'],
})
export class DuanListComponent {
  url = 'http://localhost:3000/du_an';
  list_da: IDuAn[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.loadDataList();
  }

  loadDataList(): void {
    this.httpClient.get<IDuAn[]>(this.url).subscribe((data) => {
      this.list_da = data;
      console.log(this.list_da);
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
