import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private service : SharedService) { }

  ProductList: any=[];

  ngOnInit(): void {
    this.refreshProdList();
  }

  refreshProdList(){
    this.service.getBooksList().subscribe(data=>{
      this.ProductList = data;
    });
  }
}
