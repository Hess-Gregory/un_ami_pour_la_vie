import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlAvatarComponent } from './control-avatar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  ButtonsModule,
  WavesModule,
  CardsModule,
  ModalModule
} from 'angular-bootstrap-md';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { SwiperModule, SwiperConfigInterface,
//     SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
// import { NgxUsefulSwiperModule } from 'ngx-useful-swiper/lib/ngx-useful-swiper.module';
import { NgImageSliderModule } from 'ng-image-slider';

// const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
//     observer: true,
//     direction: 'horizontal',
//     threshold: 50,
//     spaceBetween: 5,
//     slidesPerView: 3,
//     centeredSlides: true
//   };

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    // CarouselModule,
    ButtonsModule,
    WavesModule,
    CardsModule,
    ModalModule,
    // NgxUsefulSwiperModule,
    CarouselModule,
    FlexLayoutModule,
    NgImageSliderModule
  ],
  declarations: [ControlAvatarComponent],
  exports: [ControlAvatarComponent]
})
export class ControlAvatarModule {}
