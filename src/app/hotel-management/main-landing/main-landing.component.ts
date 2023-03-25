import { Component } from '@angular/core';

@Component({
  selector: 'app-main-landing',
  templateUrl: './main-landing.component.html',
  styleUrls: ['./main-landing.component.scss'],
})
export class MainLandingComponent {
  constructor() {}
  ngOnInit(): void {}

  imgCollection1: Array<object> = [
    {
      image: 'assets/images/hotel-img/IMG-0044.jpg',
      thumbImage: 'assets/images/hotel-img/IMG-0044.jpg',
      alt: 'Image 1',
      title: 'Brook',
    },
    {
      image: 'assets/images/hotel-img/IMG-0045.jpg',
      thumbImage: 'assets/images/hotel-img/IMG-0045.jpg',
      title: 'And',
      alt: 'Image 2',
    },
    {
      image: 'assets/images/hotel-img/IMG-0047.jpg',
      thumbImage: 'assets/images/hotel-img/IMG-0047.jpg',
      title: 'Woods',
      alt: 'Image 3',
    },
    {
      image: 'assets/images/hotel-img/IMG-0048.jpg',
      thumbImage: 'assets/images/hotel-img/IMG-0048.jpg',
      title: 'Retreat',
      alt: 'Image 4',
    },
  ];

  imgCollection2: Array<object> = [
    {
      image: 'assets/images/hotel-img/IMG-0065.jpg',
      thumbImage: 'assets/images/hotel-img/IMG-0065.jpg',
      alt: 'Image 5',
      title: 'Brook',
    },
    {
      image: 'assets/images/hotel-img/IMG-0066.jpg',
      thumbImage: 'assets/images/hotel-img/IMG-0066.jpg',
      title: 'And',
      alt: 'Image 6',
    },
    {
      image: 'assets/images/hotel-img/IMG-0067.jpg',
      thumbImage: 'assets/images/hotel-img/IMG-0067.jpg',
      title: 'Woods',
      alt: 'Image 7',
    },
    {
      image: 'assets/images/hotel-img/IMG-0068.jpg',
      thumbImage: 'assets/images/hotel-img/IMG-0068.jpg',
      title: 'Retreat',
      alt: 'Image 8',
    },
  ];

  imgCollection3: Array<object> = [
    {
      image: 'assets/images/hotel-img/IMG-00101.jpg',
      thumbImage: 'assets/images/hotel-img/IMG-00101.jpg',
      alt: 'Image 5',
      title: 'Brook',
    },
    {
      image: 'assets/images/hotel-img/IMG-00102.jpg',
      thumbImage: 'assets/images/hotel-img/IMG-00102.jpg',
      title: 'And',
      alt: 'Image 6',
    },
    {
      image: 'assets/images/hotel-img/IMG-00103.jpg',
      thumbImage: 'assets/images/hotel-img/IMG-00103.jpg',
      title: 'Woods',
      alt: 'Image 7',
    },
    {
      image: 'assets/images/hotel-img/IMG-00104.jpg',
      thumbImage: 'assets/images/hotel-img/IMG-00104.jpg',
      title: 'Retreat',
      alt: 'Image 8',
    },
  ];
}
