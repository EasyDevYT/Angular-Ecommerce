import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product.interface';
import { StoreService } from 'src/app/shared/services/store.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  products!: Product[];

  mainSliderOptions: SwiperOptions = {
    // autoplay: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  };

  clothesSlidesOptions: SwiperOptions = {
    slidesPerView: 3,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      "@0.00": { slidesPerView: 1 },
      "@0.75": { slidesPerView: 2 },
      "@1.00": { slidesPerView: 3 },
      "@1.50": { slidesPerView: 4 },
    }
  }; 


  constructor( private storeService: StoreService ) { }

  ngOnInit(): void {
    this.storeService.getProducts().subscribe( products => {
      this.products = products;
    } ) 
  }

}
