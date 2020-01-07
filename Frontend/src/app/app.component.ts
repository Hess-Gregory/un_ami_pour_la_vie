import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

import { CanonicalService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    this.canonicalService.setCanonicalURL();
    this.metaTagService.addTags([
      {
        name: 'keywords',
        content:
          'spa belgique, refuge animaux belgique, un ami pour la vie, Un Ami Pour La Vie, Un ami pour la vie refuge, adoption chien, adoptions chiens, refuge Un ami pour la vie, refuge belgique, refuge pour chiens, société de protection des animaux, achat chien'
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'FullHestack' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '31-10-2019', scheme: 'DD-MM-YYYY' },
      { charset: 'UTF-8' }
    ]);
  }
  constructor(
    private metaTagService: Meta,
    private canonicalService: CanonicalService
  ) {}
}
