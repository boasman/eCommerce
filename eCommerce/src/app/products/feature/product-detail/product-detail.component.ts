import { Component, effect, inject, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailStateService } from '../../data-access/product-detail-state.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  providers: [ProductDetailStateService]
})
export default class ProductDetailComponent {
  
  productDetailState = inject(ProductDetailStateService).state;

  id = input.required<string>();

  constructor(){    
    effect(() => {      
      console.log('entro al ts de detail ' + this.id)
      this.productDetailState.getById(this.id())
    })
  }


    //obeter la informacion que viaja en la ruta 
  //private activateRoute =  inject(ActivatedRoute);

  // constructor(){
  //   this.activateRoute.params.subscribe((params) => {
  //     console.log(params);
  //   })
  // }

}
