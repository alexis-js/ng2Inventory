import {Component, OnInit} from '@angular/core';
import {IProduct} from "./iproduct";
import {ProductService} from "./product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private _productService: ProductService) {
  }

  ngOnInit(): void {
    this._productService.getProducts()
      .subscribe(
        products => this.products = products,
        error => this.errorMessage = <any>error
      );
    console.log('In OnInit');
  }

  private onSubscribeOk(products): void {
    this.products = products;
  }

  private onSubscribeError(error): void {
    this.errorMessage = <any>error;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string = '';
  products: IProduct[];
  errorMessage: string;
}
