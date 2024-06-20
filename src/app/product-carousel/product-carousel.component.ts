import { Component, Input } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-carousel',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-carousel.component.html',
  styleUrl: './product-carousel.component.scss'
})
export class ProductCarouselComponent {

@Input() products:any;
@Input() category:string="";

filterdData:any = [];
ngOnInit(){
  this.products.forEach((product:any) => {
    if(product.category==this.category){
      this.filterdData.push(product)
    }
  });
  console.log(this.filterdData);
  
}

}
