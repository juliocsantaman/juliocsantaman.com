import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurTranslateService } from '../services/our-translate-service/our-translate.service';


function initTranslate(ourTranslateService: OurTranslateService) {
  return () => ourTranslateService.initTranslate();
}


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initTranslate,
      deps: [OurTranslateService],
      multi: true
    },
  ]
})
export class AppInitializersModule { }
