import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page/home-page.component';

import { MaterialComponentsModule } from '../material-components.module';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    MaterialComponentsModule,
    NgxUsefulSwiperModule,
    SharedModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
