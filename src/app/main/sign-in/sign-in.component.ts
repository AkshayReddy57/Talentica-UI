import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class SignInComponent implements OnInit {

  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/1300/600`);
  constructor(config: NgbCarouselConfig, private router: Router) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    // config.showNavigationArrows = false;
    config.showNavigationIndicators = true;
  }
  ngOnInit(): void {
  }

  signIn() {
    this.router.navigate(['/dashboard'])
  }

}
