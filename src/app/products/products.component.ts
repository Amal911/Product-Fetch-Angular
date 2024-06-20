import { Component } from '@angular/core';
import { ProductCarouselComponent } from '../product-carousel/product-carousel.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCarouselComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  categories:string[] = []; 
  products:any;
  async fetchData(){
    let data:any = await fetch('https://dummyjson.com/products');
    console.log(data);
    
    data = await data.json();
    this.products = data['products']

    data = data['products']
    console.log(data);
    console.log(typeof data);
    
    data.map((product:any)=>{
      console.log(product);
      console.log(product.category);
      if(!this.categories.includes(product.category)){
        this.categories.push(product.category);
      }
    })
  }
  getCategory(){
    
  }
  async ngOnInit() {
    await this.fetchData();
    console.log(this.categories);
   }
}
