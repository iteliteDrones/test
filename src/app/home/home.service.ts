import { Injectable } from '@angular/core';
import gsap from "gsap";

import { TextPlugin } from 'gsap/src/all';
import { ScrollTrigger } from 'gsap/all';

import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private topProperties;

  constructor(private deviceService: DeviceDetectorService){}

  public init(writeLine, elements): void
  {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".machine_line", 
    {
      text: {value: `One of the most cost effecting counter UAV’s solutions is jamming the Electro Magnetic signals that the device uses for data transmission and navigation.
      An effective anti-drone solution should cover the spectrum between 433MHz up to 7.2GHz frequency bands.
      ITELITE has some antenna systems that you can use for your anti-drone system that can handle more than 100W of input power.`},
      duration: 14,
      delay: 1,
      ease: "none"
    })
    .then(() => {
      setTimeout(() => {
        writeLine.nativeElement.remove();
      }, 1150);
    });

    gsap.fromTo(
      "h1",
      {
        y: -60,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1
      }
    )
    .delay(.5);

    this.scrollEvent();
    
    if(this.deviceService.isMobile() || this.deviceService.isTablet()) return;

    Array.from(elements)
    .forEach((e: HTMLElement) => {
      gsap.fromTo(e.querySelector(".content"),
        {
          y: '-=100',
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: 'easeInOut', 
          scrollTrigger: {
            trigger: e,
            start: '-20% 20%',
          }
        }
      );  
    })

    this.setSizes(elements);
  }

  public setSizes(elements)
  {
    this.topProperties = [];

    Array.from(elements)
    .forEach((e: HTMLElement) => {

       this.topProperties.push(
        {
          y: e.offsetTop, 
          size: e.offsetHeight 
        });

    });
  }

  scrollEvent()
  {

    const span = document.getElementsByClassName("number");
    let currentElementID: number;

    function scrollAnim(id): boolean
    {
      if(currentElementID == id) return false;

      setTimeout(() => {
        Array.from(span).forEach((e, _id) => {
          e['style'].top = `${(_id * 30) + id * (-30)}px`;
        });
      }, 700);
        
      return false;
    };

    const condition = (value: number) => 'value.y - window.innerHeight /'+value+' < document.body.scrollTop && (value.y - window.innerHeight / '+value+') + value.size > document.body.scrollTop';

    document.body.addEventListener("scroll", () => {
      
      this.topProperties.every((value, id: number) => {
        
        if(window.innerWidth > 1000? eval(condition(2.2)): eval(condition(2))) return scrollAnim(id);
        return true;
      });

      
    })
  }
}
