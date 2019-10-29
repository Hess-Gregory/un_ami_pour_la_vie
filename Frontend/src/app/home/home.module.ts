import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeHeaderComponent} from './home-header/home-header.component';
import { HomeNavbarComponent} from './home-navbar/home-navbar.component';
import { SliderComponent} from './slider/slider.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { UserListComponent } from '../user-list/user-list.component';
import { TodoService } from '../todo.service';
import { UserService } from '../user.service';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../auth.service';
import { AuthGuard } from '../auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';


export function tokenGetter() {
    return localStorage.getItem('access_token');
  }
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbDropdownModule,
    NgbCarouselModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:4000'],
        blacklistedRoutes: ['localhost:4000/api/auth']
      }
    })
  ],
  declarations: [HomeComponent, ,
    TodoListComponent,
    UserListComponent,
    LoginComponent, HomeHeaderComponent, HomeNavbarComponent, SliderComponent ]
})
export class HomeModule { }
