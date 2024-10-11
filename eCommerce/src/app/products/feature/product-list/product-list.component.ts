import { Component, inject } from '@angular/core';
import { ProductsService } from '../../data-access/products.service';
import { HttpClient } from '@angular/common/http';
import { ProductoStateService } from '../../data-access/product-state-.service';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  providers:[ProductoStateService]
})
export default class ProductListComponent {

  // private productService = inject(ProductsService);

  // constructor(){
  //   this.productService.getProducts().subscribe((products) =>{
  //     console.log(products);
  //   })
  // }

  productsState = inject(ProductoStateService)

  changePage(){
    const page = this.productsState.state.page() + 1
    this.productsState.changePage$.next(page);
  }

}
