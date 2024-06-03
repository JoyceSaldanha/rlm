import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-abbegate',
  templateUrl: './abbegate.component.html',
  styleUrl: './abbegate.component.css'
})
export class AbbegateComponent implements OnInit{
  images = [
    {
      previewImageSrc: 'https://images.pexels.com/photos/733857/pexels-photo-733857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Description for Image 1',
      title: 'Title 1'
    },
    {
      previewImageSrc: 'https://images.pexels.com/photos/1322466/pexels-photo-1322466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Description for Image 2',
      title: 'Title 2'
    },
    {
      previewImageSrc: 'https://images.pexels.com/photos/293229/pexels-photo-293229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Description for Image 3',
      title: 'Title 3'
    },
    {
      previewImageSrc: 'https://images.pexels.com/photos/816527/pexels-photo-816527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Description for Image 4',
      title: 'Title 4'
    }
  ];
  activeIndex = 0;


  ngOnInit() {
    this.startAutoPlay();
}

startAutoPlay() {
  setInterval(() => {
    this.nextImage();
  }, 5000);
}

prevImage() {
  this.activeIndex = (this.activeIndex - 1 + this.images.length) % this.images.length;
}

nextImage() {
  this.activeIndex = (this.activeIndex + 1) % this.images.length;
}
}
