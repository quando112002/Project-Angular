import { CommonModule } from '@angular/common';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ITask } from '../itask';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterLink],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  url = 'http://localhost:3000/task';
  list_task: ITask[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.loadDataList();
  }

  loadDataList(): void {
    this.httpClient.get<ITask[]>(this.url).subscribe((data) => {
      this.list_task = data;
      console.log(this.list_task);
    });
  }
  onDelete(id: string) {
    let confirmDelete: any = confirm("Bạn chắc chắn muốn xoá chứ ?");
    if(confirmDelete){
      this.httpClient.delete(this.url +'/'+ id).subscribe((data) => {
        this.loadDataList();
      });
    }
    else{
      return;
    }
  }
}
