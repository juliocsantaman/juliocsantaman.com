import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class OurTranslateService {

  langs: string[] = [];

  constructor(
    public translate: TranslateService) {

    }

  initTranslate() {
    const defaultLang = 'en';
    this.translate.addLangs(['en', 'es', 'fr', 'ja']);
    this.translate.setDefaultLang(defaultLang);
    this.translate.use(defaultLang);
    this.langs = this.translate.getLangs();
    // let browserLang = this.translate.getBrowserLang();
    // if (browserLang != undefined) {
    //   this.translate.use(browserLang.match(/es|en/) ? browserLang : defaultLang);
    // } else {
    //   browserLang = defaultLang;
    //   this.translate.use(browserLang);
    // }
  }


  changeLang(lang: string) {
    this.translate.use(lang);
  }

  getLangs(): string[] {
    return this.langs;
  }

}
