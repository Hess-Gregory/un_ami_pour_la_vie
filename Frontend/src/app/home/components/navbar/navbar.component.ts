import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../../shared/services/auth.service';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import * as jwt_decode from 'jwt-decode';
declare let $: any;

declare global {
    interface Window {
        requestAnimFrame: any;
        mozRequestAnimationFrame: any;
        oRequestAnimationFrame: any;
        msRequestAnimationFrame: any;

    }
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
decoded: any;
window: any;
currentDate: any;
callback: any;
  constructor(public auth: AuthService, private translate: TranslateService, public router: Router) {

    const jwtToken = localStorage.getItem('access_token');
        if (jwtToken) {
            console.log('Nouveau token: ', jwtToken);
            console.log('username : ', localStorage.getItem('username'));

            const token = localStorage.getItem('access_token');
            const expirationTime = jwt_decode(token)['exp'];
            const current_time2: any  = Date.now() / 1000;
            const current_time: any =  Math.round(current_time2);
            this.currentDate = moment(new Date());

              if (current_time > expirationTime) {
                  this.auth.logout();
                }
        }
  }
  logout() {
    this.auth.logout();
    localStorage.removeItem('access_token');
    this.router.navigate(['login']);
  }
  ngOnInit() {

    // Défilement régulier à l’aide de l’assouplissement jQuery
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
          let target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top - 56)
            }, 1000, 'easeInOutExpo');
            return false;
          }
        }
      });
        $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });
  // Activer scrollspy pour ajouter une classe active aux éléments de la barre de navigation lors du défilement
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });
     $(document).ready(function() {
        $(window).scroll(function() {
          const scroll = $(window).scrollTop();
            if (scroll > 0) {
                $('nav').removeClass('nav200');
                $('.site').addClass('site0');
                $('.site').removeClass('site50');
                $('.navbar').removeClass('navbar-novisible');
                $('.navbar').addClass('navbar-novisible');
                $('.navbar-brand').removeClass('brand-visible');
                $('.navbar-brand').addClass('brand-novisible');
                $('.navbar-brand').removeClass('200');
                $('.navbar-brand').addClass('0');
                $('.navbar-brand-2').removeClass('200');
                $('.navbar-brand-2').addClass('0');
                $('.navbar-brand-2').removeClass('add_logo');
                $('.navbar-brand-2').addClass('remove_logo');
                $('.nav-link').removeClass('nav-link-visible');
                $('.nav-link').addClass('nav-link-novisible');
            }
            if (scroll > 50) {
                $('nav').removeClass('nav0');
                $('nav').addClass('nav200');
                $('nav').removeClass('nav450');
                $('.site').removeClass('site0');
                $('.site').addClass('site50');
                $('.site').removeClass('site450');
                $('.navbar-brand').removeClass('brand-visible');
                $('.navbar-brand').addClass('brand-novisible');
                $('.navbar-brand').removeClass('0');
                $('.navbar-brand').removeClass('450');
                $('.navbar-brand').addClass('200');
                $('.navbar-brand-2').removeClass('0');
                $('.navbar-brand-2').removeClass('450');
                $('.navbar-brand-2').addClass('200');
                $('.navbar-brand-2').removeClass('add_logo');
                $('.navbar-brand-2').addClass('remove_logo');
                $('.navbar').removeClass('navbar-novisible');
                $('.navbar').addClass('navbar-visible');
                $('.nav-link').addClass('nav-link-novisible');
            }
            if (scroll > 450) {
                $('nav').removeClass('nav200');
                $('nav').addClass('nav450');
                $('nav').removeClass('nav600');
                $('.site').removeClass('site50');
                $('.site').addClass('site450');
                $('.site').removeClass('site600');
                $('.navbar-brand').removeClass('brand-novisible');
                $('.navbar-brand').addClass('brand-visible');
                $('.navbar-brand').removeClass('200');
                $('.navbar-brand').removeClass('600');
                $('.navbar-brand').addClass('450');
                $('.navbar-brand-2').removeClass('200');
                $('.navbar-brand-2').removeClass('600');
                $('.navbar-brand-2').addClass('450');
                $('.navbar-brand-2').removeClass('add_logo');
                $('.navbar-brand-2').addClass('remove_logo');
            }
            if (scroll > 600) {
                $('nav').removeClass('nav450');
                $('nav').addClass('nav600');
                $('nav').removeClass('nav850');
                $('.site').removeClass('site450');
                $('.site').addClass('site600');
                $('.site').removeClass('site850');
                $('.nav-link').removeClass('nav-link-novisible');
                $('.nav-link').addClass('nav-link-visible');
                $('.navbar-brand').removeClass('450');
                $('.navbar-brand').removeClass('850');
                $('.navbar-brand').addClass('600');
                $('.navbar-brand-2').removeClass('450');
                $('.navbar-brand-2').removeClass('850');
                $('.navbar-brand-2').addClass('600');
                $('.navbar-brand-2').removeClass('add_logo');
                $('.navbar-brand-2').addClass('remove_logo');
            }
            if (scroll > 920) {
                $('nav').removeClass('nav600');
                $('nav').addClass('nav850');
                $('.site').removeClass('site600');
                $('.site').addClass('site850');
                $('.navbar-brand').removeClass('brand-visible');
                $('.navbar-brand').addClass('brand-novisible');
                $('.navbar-brand').removeClass('600');
                $('.navbar-brand').addClass('850');
                $('.navbar-brand-2').removeClass('600');
                $('.navbar-brand-2').addClass('850');
                $('.navbar-brand-2').removeClass('remove_logo');
                $('.navbar-brand-2').addClass('add_logo');
            }
        });
      });

      const $content = $('header .content')
        , $blur    = $('header .overlay')
        , wHeight  = $(window).height();

      $(window).on('resize', function() {
        (<any> wHeight) = $(window).height();
      });


      window.requestAnimFrame = (function() {
        return  window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame      ||
          window.msRequestAnimationFrame     ||
          function(callback: any) {
            window.setTimeout(callback, 1000 / 60);
          };
      })();

      function Scroller() {
        this.latestKnownScrollY = 0;
        this.ticking            = false;
      }

      Scroller.prototype = {

        init: function() {
          window.addEventListener('scroll', this.onScroll.bind(this), false);
          $blur.css('background-image', $('header:first-of-type').css('background-image'));
        },


        onScroll: function() {
          this.latestKnownScrollY = window.scrollY;
          this.requestTick();
        },


        requestTick: function() {
          if ( !this.ticking ) {
            this.window.requestAnimFrame(this.update.bind(this));
          }
          this.ticking = true;
        },

        update: function() {
          const currentScrollY = this.latestKnownScrollY;
          this.ticking       = false;


          const slowScroll = currentScrollY / 2
            , blurScroll = currentScrollY * 2
            , opaScroll = 1.4 - currentScrollY / 850;
         if (currentScrollY > wHeight) {
           $('nav').scss('position', 'fixed !important');
         } else {
           $('nav').scss('position', 'absolute !important');
         }

          $content.scss({
            'transform'         : 'translateY(' + slowScroll + 'px)',
            '-moz-transform'    : 'translateY(' + slowScroll + 'px)',
            '-webkit-transform' : 'translateY(' + slowScroll + 'px)',
            'opacity' : opaScroll
          });

          $blur.scss({
            'opacity' : blurScroll / wHeight
          });
        }
      };

      const scroller = new Scroller();
      scroller.init();

      }
  }
