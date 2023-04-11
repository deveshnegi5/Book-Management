import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private service: SharedService) { }

  bookDetailList: any = [];

  ActivateEdit: boolean = false;
  @Input() prod: any;

  ngOnInit(): void {
    this.refreshBookList();
  }

  closeClick() {
    this.ActivateEdit = true;
    this.refreshBookList();
    console.log('close cicked')

  }

  refreshBookList() {
    this.service.getBooksList().subscribe(data => {
      this.bookDetailList = data;
      console.log(data)

    });
  }

}
