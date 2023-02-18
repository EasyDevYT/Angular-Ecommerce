import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce';

  mainSliderOptions: SwiperOptions = {
    autoplay: true,
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
    spaceBetween: 10,
    slidesPerView: 2,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  };


}
