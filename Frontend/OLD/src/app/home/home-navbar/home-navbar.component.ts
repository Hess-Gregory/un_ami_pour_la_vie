import { Component, OnInit } from '@angular/core';
import { Router,  NavigationEnd  } from '@angular/router';
import { AuthService } from '../../auth.service';
declare let $: any;
@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.scss']
})

export class HomeNavbarComponent implements OnInit {
    window: any;

  constructor(private auth: AuthService, private router: Router) {}

  logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }

  ngOnInit() {


    // tslint:disable-next-line: deprecation
    $(document).ready(function() {
        // tslint:disable-next-line: deprecation
        $(window).scroll(function() {
          const scroll = $(window).scrollTop();
            if (scroll > 0) {
                $('.navbar').removeClass('navbar-novisible 200');
                $('.navbar').addClass('navbar-novisible 0');
                $('.navbar-brand').removeClass('brand-visible 200');
                $('.navbar-brand').addClass('brand-novisible 0');
                $('.nav-link').removeClass('nav-link-visible 200');
                $('.nav-link').addClass('nav-link-novisible 0');
            }
            if (scroll > 200) {
                $('.navbar-brand').removeClass('brand-visible 0');
                $('.navbar-brand').addClass('brand-novisible 200');
                $('.navbar').removeClass('navbar-novisible 0');
                $('.navbar').addClass('navbar-visible 200');
                $('.nav-link').addClass('nav-link-novisible 200');
            }
            if (scroll > 450) {
                $('.navbar-brand').removeClass('brand-novisible 200');
                $('.navbar-brand').addClass('brand-visible 450');
            }
            if (scroll > 600) {
                $('.nav-link').removeClass('nav-link-novisible 0');
                $('.nav-link').addClass('nav-link-visible 600');
            }
            if (scroll > 850) {
                $('.navbar-brand').removeClass('brand-visible');
                $('.navbar-brand').addClass('brand-novisible');
            }
        });
      });
    // Fermer les éléments Collapse lorsqu’on clique à l’extérieur des zones


    // Based on the Scroller function from @sallar

      const $content = $('header .content')
        , $blur    = $('header .overlay')
        , wHeight  = $(window).height();

      $(window).on('resize', function() {
        (<any> wHeight) = $(window).height();
      });


      this.window.requestAnimFrame = (function() {
        return  this.window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          this.window.mozRequestAnimationFrame ||
          this.window.oRequestAnimationFrame      ||
          this.window.msRequestAnimationFrame     ||
          function(/* function */ callback, /* DOMElement */ element) {
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
            , opaScroll = 1.4 - currentScrollY / 400;
         if (currentScrollY > wHeight) {
           $('nav').css('position', 'fixed');
         } else {
           $('nav').css('position', 'absolute');
         }

          $content.css({
            'transform'         : 'translateY(' + slowScroll + 'px)',
            '-moz-transform'    : 'translateY(' + slowScroll + 'px)',
            '-webkit-transform' : 'translateY(' + slowScroll + 'px)',
            'opacity' : opaScroll
          });

          $blur.css({
            'opacity' : blurScroll / wHeight
          });
        }
      };

      const scroller = new Scroller();
      scroller.init();

      }

}

