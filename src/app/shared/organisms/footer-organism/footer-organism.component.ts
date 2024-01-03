import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-footer-organism',
  templateUrl: './footer-organism.component.html',
  styleUrls: ['./footer-organism.component.scss']
})
export class FooterOrganismComponent implements OnInit, OnDestroy {

  footerText: string = '';
  private subscriptions: Subscription[] = [];

  constructor(
    private translateService: TranslateService
  ) {

  }

  ngOnInit(): void {
    this.getCurrentYear();
  }

  getCurrentYear() {
    //const translation = this.translateService.instant('ROOT.APP.ORGANISMS.FOOTER_ORGANISM.TEXTS.T2');
    this.subscriptions.push(

      this.translateService.get('ROOT.APP.ORGANISMS.FOOTER_ORGANISM.TEXTS.T2').subscribe({
        next: (translation: string) => {
          console.log('text', translation);

          const date = new Date;
          const currentYear = date.getUTCFullYear().toString();
          console.log('currentYear', currentYear);

          this.footerText = translation.replace('currentYear', currentYear);


        },
        error: (error: Error) => {
          console.error('Error', error.message);
        }
      })

    );
  }

  ngOnDestroy(): void {
    if (this.subscriptions.length > 0) {
      console.log('ngOnDestroy');
      this.subscriptions.forEach((subscription: Subscription) => {
        subscription.unsubscribe();
      });
    }
  }

}
