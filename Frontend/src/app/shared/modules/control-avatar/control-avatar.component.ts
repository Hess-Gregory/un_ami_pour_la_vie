import {
  AfterViewInit,
  Component,
  OnInit,
  Renderer2,
  ElementRef,
  ChangeDetectionStrategy,
  ViewChild
} from '@angular/core';
import { ControlAvatarService } from './control-avatar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgImageSliderComponent } from 'ng-image-slider';

import { OwlOptions } from 'ngx-owl-carousel-o';
import { UserUpdateService } from './../../../admin/users/users-manager/user-update/user-update.service';
export class CarouselData {
  id?: string;
  text: string;
  dataMerge?: number;
  width?: number;
  dotContent?: string;
  src?: string;
  dataHash?: string;
}

@Component({
  selector: 'app-control-avatar',
  templateUrl: './control-avatar.component.html',
  styleUrls: ['./control-avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlAvatarComponent implements OnInit, AfterViewInit {
  isLoadingResults = true;
  isLoading = false;
  activeExist = false;

  activePictures = false;
  disablePictureExist = false;
  alertError = false;
  ErrorValid1 = false;
  ErrorValid2 = false;
  public ErrorCode1: string;
  public ErrorText1: string;
  public ErrorCode2: string;
  public ErrorText2: string;
  idPictureActive: string;
  idPicture: string;
  idPictureActives: string;
  idPictures: string;
  public id: string;
  imageUrl: any;
  newPicture: any;
  pictureActive2: any;

  alerts1: Array<any> = [];
  alerts2: Array<any> = [];

  activePicture: any = [];
  disablePicture: any = [];
  sliders: any = [];

  // imageArray: Array<object> = [];
  // imageObject:  Array<object> = [];
  // pictureObjet = false;
  // pictureObjet1 = false;
  // sliderWidth: Number = 940;
  // sliderImageWidth: Number = 250;
  // sliderImageHeight: Number = 200;
  // sliderArrowShow: Boolean = true;
  // sliderInfinite: Boolean = false;
  // sliderImagePopup: Boolean = true;
  // sliderAutoSlide: Boolean = false;
  // sliderSlideImage: Number = 4;
  // sliderAnimationSpeed: any = 1;
  // sliderexist = false;
  // carouselData: CarouselData[] = [
  //     { text: 'Slide 1 PM', dataMerge: 2, width: 300, dotContent: 'text1'},
  //     { text: 'Slide 2 PM', dataMerge: 1, width: 500, dotContent: 'text2'},
  //     { text: 'Slide 3 PM', dataMerge: 3, dotContent: 'text3'},
  //     { text: 'Slide 4 PM', width: 450, dotContent: 'text4'},
  //     { text: 'Slide 5 PM', dataMerge: 2, dotContent: 'text5'},
  //     // { text: 'Slide 6', dotContent: 'text5'},
  //     // { text: 'Slide 7', dotContent: 'text5'},
  //     // { text: 'Slide 8', dotContent: 'text5'},
  //     // { text: 'Slide 9', dotContent: 'text5'},
  //     // { text: 'Slide 10', dotContent: 'text5'},
  //   ];
  //   title = 'owl-carousel-libdemo';
  //   owlNext = '&rarr;';
  //   owlPrev = '&larr;';

  //   customOptions: OwlOptions = {
  //     // autoWidth: true,
  //     loop: true,
  //     // items: '10',
  //     // margin: 10,
  //     // slideBy: 'page',
  //     // merge: true,
  //     autoplay: true,
  //     autoplayTimeout: 3000,
  //     // autoplayHoverPause: true,
  //         autoplaySpeed: 2000,
  //     dotsSpeed: 500,
  //     // dots: false,
  //     // dotsData: true,
  //     // mouseDrag: false,
  //     // touchDrag: false,
  //     // pullDrag: false,
  //     smartSpeed: 400,
  //     // fluidSpeed: 499,
  //     dragEndSpeed: 350,
  //     // dotsEach: 4,
  //     // center: true,
  //     // rewind: true,
  //     // rtl: true,
  //     // startPosition: 1,
  //     // navText: [ '<i class=fa-chevron-left>left</i>', '<i class=fa-chevron-right>right</i>' ],
  //     responsive: {
  //       0: {
  //         items: 1
  //       },
  //       600: {
  //         items: 2
  //       },
  //       900: {
  //         items: 3
  //       }
  //     },
  //     // stagePadding: 40,
  //     nav: true
  //   };
  //   activeSlides: any;

  //   classes: {[key: string]: boolean} = {
  //     'animated': true,
  //     'fadeIn': true
  //   };

  // @ViewChild('nav', { static: false })  ds: NgImageSliderComponent;

  constructor(
    private thisService: ControlAvatarService,
    private activatedRoute: ActivatedRoute,
    private renderer: Renderer2,
    private router: Router,
    private userupdateservice: UserUpdateService
  ) {
    this.getAllPicture();
  }

  ngOnInit() {
    console.log('ngoninit 1  :', this.isLoadingResults);
    console.log('ngoninit 1 isLoading  :', this.isLoading);

    setTimeout(() => {
      if (!this.isLoadingResults) {
        this.isLoading = true;
      }
      console.log('ngoninit set times  :', this.isLoadingResults);
      console.log('ngoninit set times isLoading  :', this.isLoading);
    }, 8000);
    console.log('ngoninit 2  :', this.isLoadingResults);
    console.log('ngoninit 2 isLoading :', this.isLoading);

    //   this.thisService.getDisablePicture(this.id).subscribe(
    //     response => {
    //         this.disablePicture = response;
    //         if (this.disablePicture) {
    //         this.disablePictureExist = true;
    //         }
    //         for (const images of this.disablePicture) {
    //             this.imageUrl = images.url;
    //         this.newPicture = { image: this.imageUrl,
    //             thumbImage:  this.imageUrl,
    //             alt: images.description,
    //             title: images.name};
    //         console.log(this.newPicture);
    //         this.sliders.push(this.newPicture);

    //         }
    //         this.pictureObjet1 = true;

    //     },

    //     error => {
    //       this.objStringError2 = JSON.stringify(error);
    //       this.objError2 = JSON.parse(this.objStringError2);
    //       this.ErrorStatus2 = this.objError2.status;
    //       this.ErrorstatusText2 = this.objError2.statusText;
    //       this.Errormessage2 = this.objError2.error.message;

    //       this.alerts2.push({
    //         type: 'danger',
    //         message: this.Errormessage2
    //       });
    //       this.alertError2 = true;
    //     }
    //   );

    // console.log(this.sliders);
  }

  // getPassedData(data: any) {
  //     this.activeSlides = data;
  //     console.log(this.activeSlides);
  //   }

  //   addClassObj() {
  //     const startClasses: any = { ...this.classes};
  //     startClasses['fade-spin'] = true;
  //     this.classes = startClasses;
  //   }

  //   deleteOneClass() {
  //     const startClasses: any = { ...this.classes};
  //     delete startClasses['fade-spin'];
  //     this.classes = startClasses;
  //   }

  getAllPicture() {
    // disablePicture= res[0]  activePicture= res[1]  activesPicture= res[2]

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.userupdateservice.getAllPicture(this.id).subscribe(
      res => {
        // disablePicture= res[0]
        this.disablePicture = res[0];

        if (this.disablePicture) {
          this.disablePictureExist = true;
          for (const images of this.disablePicture) {
            this.imageUrl = images.url;
            this.newPicture = {
              image: this.imageUrl,
              thumbImage: this.imageUrl,
              alt: images.description,
              title: images.name
            };
            console.log(this.newPicture);
            this.sliders.push(this.newPicture);
          }
        }

        // activePicture res[1]
        this.activePicture = res[1];

        if (this.activePicture) {
          console.log('this.activePicture: ', this.activePicture);
          const stringifyPicture = JSON.stringify(this.activePicture);
          const parsePicture = JSON.parse(stringifyPicture);
          console.log('parsePicture: ', parsePicture.url);
          this.idPictureActive = parsePicture.id;
          this.idPicture = stringifyPicture['id'];
          if (this.idPictureActive) {
            console.log(this.idPictureActive);
            this.activeExist = true;
            this.pictureActive2 = parsePicture.url;
          }
          this.isLoadingResults = false;
          console.log('subscribe  :', this.isLoadingResults);
          console.log('this.idPicture: ', this.idPicture);
        }
      },
      err => {
        const stringifyError = JSON.stringify(err);
        const parseError = JSON.parse(stringifyError);
        this.ErrorCode1 = parseError.status;
        this.ErrorText1 = parseError.error.message;
        if (this.idPicture) {
          this.activeExist = true;
        } else {
          this.alerts1.push({
            type: 'danger',
            code: this.ErrorCode1,
            message: this.ErrorText1
          });
          this.alertError = true;
          this.isLoadingResults = false;
          console.log('erreur  :', this.isLoadingResults);
        }
      }
    );
  }

  activate(e: string) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.thisService.getActivePicture(this.id).subscribe(
      response => {
        this.activePictures = response;
        const stringifyPictureB = JSON.stringify(this.activePictures);
        const parsePictureB = JSON.parse(stringifyPictureB);
        this.idPictures = stringifyPictureB['id'];
        this.idPictureActives = parsePictureB.id;
        if (response) {
          this.thisService.disablePicture(this.idPictureActives, 0);
          this.thisService.enablePicture(e, 1);
          setTimeout(() => {
            this.router.routeReuseStrategy.shouldReuseRoute = function() {
              return false;
            };
            const currentUrl = this.router.url + '?';
            this.router.navigateByUrl(currentUrl).then(() => {
              this.router.navigated = false;
              this.router.navigate([this.router.url]);
            });
          }, 3000);
        } else {
          this.thisService.enablePicture(e, 1);
          setTimeout(() => {
            this.router.routeReuseStrategy.shouldReuseRoute = function() {
              return false;
            };
            const currentUrl = this.router.url + '?';
            this.router.navigateByUrl(currentUrl).then(() => {
              this.router.navigated = false;
              this.router.navigate([this.router.url]);
            });
          }, 3000);
        }
      },
      error => {
        const stringifyError = JSON.stringify(error);
        const parseError = JSON.parse(stringifyError);
        this.ErrorCode2 = parseError.status;
        this.ErrorText2 = parseError.error.message;
        this.alerts2.push({
          type: 'danger',
          code: this.ErrorCode2,
          message: this.ErrorText2
        });
      }
    );
  }

  delete(e: string) {}

  closeAlert1(alert: any) {
    this.ErrorValid1 = true;
    const index: number = this.alerts1.indexOf(alert);
    this.alerts1.splice(index, 1);
  }
  closeAlert2(alert: any) {
    this.ErrorValid2 = true;
    const index: number = this.alerts2.indexOf(alert);
    this.alerts2.splice(index, 1);
  }
  ngAfterViewInit() {
    const buttons = document.querySelectorAll('.btn-floating');
    buttons.forEach((el: any) => {
      this.renderer.removeClass(el, 'btn-floating');
      this.renderer.addClass(el, 'px-3');
      this.renderer.addClass(el.firstElementChild, 'fa-3x');
    });
  }
}
