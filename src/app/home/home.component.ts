import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Products } from '../../types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  constructor(private productService: ProductsService) {

  }

  ngOnInit(): void {
    this.productService.getProducts("http://localhost:3000/clothes", {page: 0, perPage: 5}).subscribe((products: Products) => {
      console.log(products);
    });
  }

}
