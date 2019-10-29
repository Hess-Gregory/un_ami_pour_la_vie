import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [routerTransition()]
})
export class SliderComponent implements OnInit {
    public sliders: Array<any> = [];


  constructor() {
    this.sliders.push(
        {
            imagePath: '../../../assets/images/carousel/devon-janse-van-rensburg-hSfok6PdwgE-unsplash.jpg',
            label: 'First slide label',
            text:
                'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        },
        {
            imagePath: '../../../assets/images/carousel/nirzar-pangarkar-sDpmnfv-KRk-unsplash.jpg',
            label: 'Second slide label',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            imagePath: '../../../assets/images/carousel/valerie-elash-UxdeBphE62U-unsplash.jpg',
            label: 'Third slide label',
            text:
                'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
        },
        {
            imagePath: '../../../assets/images/carousel/clark-young-egfS7HzgKcc-unsplash.jpg',
            label: 'Third slide label',
            text:
                'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
        },
        {
            imagePath: '../../../assets/images/carousel/devin-h-2FWAIlAcmo8-unsplash.jpg',
            label: 'Third slide label',
            text:
                'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
        }
        );
  }

  ngOnInit() {
  }

}
