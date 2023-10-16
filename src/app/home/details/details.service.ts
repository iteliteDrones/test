import { Injectable } from '@angular/core';
import { data } from './paticularDetails';

import gsap from 'gsap';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  private time;
  private flag: boolean = false;

  gsapDetails(content: HTMLElement)
  {

    Array.from(content.getElementsByClassName("properties"))
    .forEach((item: HTMLElement, id: number) => {
      gsap.fromTo(item,
      {
        x: "-=150px",
        opacity: 0
      },
      {
        x: 0,
        opacity: 1
      })
      .delay(id + 1);
    });
    
  }

  last;

  showProperties(this): void
  {
    const detailsService = this.detailsService;
    if(detailsService.time) return;

    function show(): void
    {
      if(!detailsService.flag) return;

      this.button.nativeElement.style.opacity = 0;

      setTimeout(() => {
        this.button.nativeElement.style.display = "none";
        detailsService.flag = true;
      }, 1200);

      detailsService.flag = false;
      this.properties = data[this.details.id];
      
      this.changeDetRef.detectChanges();
      detailsService.gsapDetails(this.content.nativeElement);
    }

    detailsService.flag = true;
    detailsService.time = setTimeout(show.bind(this), 1250);
  };

  leaveFromButton(this)
  {
    this.detailsService.flag = false;
    clearTimeout(this.detailsService.time);

    this.detailsService.time = undefined;
  }
}