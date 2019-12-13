import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
         FormsModule,
         LoginRoutingModule,
         NgbModule,
         HttpClientModule

    ],

    declarations: [LoginComponent],
})
export class LoginModule {}
