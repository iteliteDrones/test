import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { newsObj } from './news';
import gsap from 'gsap';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements AfterViewInit{

  news: News[] = newsObj;
  paragraphText: string = "";

  @ViewChild("paragraph")
  paragraphElement: ElementRef;

  @ViewChild("line")
  lineElement: ElementRef;

  ngAfterViewInit(): void
  {
    gsap.fromTo(
      ".title",
      {
        opacity: 0,
        x: -180
      },
      {
        opacity: 1,
        x: 40
      }
    )
    .delay(.7);

    gsap.fromTo(
      ".date",
      {
        opacity: 0,
        x: 90
      },
      {
        opacity: 1,
        x: 0
      }
    )
    .delay(.44);

    this.writeEffect();
  }

  writeEffect(): void
  {
    function addLetter(letter: string, i: number)
    {
      this.paragraphText += letter;

      if(this.news[0].description.length - 1 == i) setTimeout(() => {
        this.lineElement.nativeElement.remove();
      }, 1450);
    };

    for(let i=0; i<this.news[0].description.length; i++)
    {
      setTimeout(addLetter.bind(this, this.news[0].description[i], i), i * 46 + 50);
    };
  }
}

interface News{
  title: string,
  description: string,
  date: string
}