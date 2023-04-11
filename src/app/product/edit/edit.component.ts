import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() prod:any;
  username!:string;
  password!:string;
  bookDetailList: any = [];
  ngOnInit(): void {
    this.username = this.prod.username;
    this.password = this.prod.password;
    this.refreshBookList();

  }
  refreshBookList() {
    this.service.getBooksList().subscribe(data => {
      this.bookDetailList = data;
      console.log(data)

    });
  }
  closeClick() {
    this.refreshBookList();

  }

  loginUser(){
    var val = {username:this.username,
      password: this.password};
              this.service.loginUser(val).subscribe(res=>{
                alert(res.toString());
              }
              )
  }


}
