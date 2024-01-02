import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function initTranslate(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (initTranslate),
        deps: [HttpClient]
      }
    })
  ]
})
export class PackagesModule { }
