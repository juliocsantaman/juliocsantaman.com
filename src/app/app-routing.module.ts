import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutMainPageComponent } from './pages/layout-main-page/layout-main-page.component';
import { LayoutMainPageModule } from './pages/layout-main-page/layout-main-page.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';


const routes: Routes =
  [
    {
      path: '',
      component: LayoutMainPageComponent,
      children: [
        {
          path: '',
          component: HomePageComponent
        },
        {
          path: 'contact',
          component: ContactPageComponent
        }
      ]
    },


  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, LayoutMainPageModule]
})
export class AppRoutingModule { }
