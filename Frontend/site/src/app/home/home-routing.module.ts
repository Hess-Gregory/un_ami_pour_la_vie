import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [

        { path: '', redirectTo: 'home', pathMatch: 'prefix' },
        { path: 'homepage', loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule) },
    ]
}
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class HomeRoutingModule {}
