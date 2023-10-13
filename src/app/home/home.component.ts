import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { generalDetails } from './detailsTypes';

import { HomeService } from './home.service';
import { CacheService } from 'ng2-cache';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  constructor(public homeService: HomeService, private _cacheService: CacheService){}

  private elements: HTMLCollectionOf<Element> = document.getElementsByClassName("container-fluid");

  details: generalDetails[] =
  [
    {
      header: "ADAS 1.1 O", 
      paragraph: `Using these 2 antennas, you can build a system covering different sectors for bands 433MHz to 1.3GHz (PAT0413G5) and from 2.4GHz to 5.9GHz (PAT2450G10).
                  Each antenna is vertically polarized. The PAT0413G5 gain is in the range of 3.4 – 8.7dBi.
                  On the other hand, the PAT2450G10 gain is 9-10 dBi.`,
      img_num: "1"
    },
    {
      header: "ADAS 2.1 O",
      paragraph: `This is a ruggedized steel directive LPD antenna covering from 500MHz up to 3GHz.
                  The gain and radiation pattern are quite stable within all the operational antenna’s bandwidth.
                  The polarization is linear and by rotating the antenna you can set the polarization to H, V or slant polarization.`,
      img_num: "2"
    },
    {
      header: "ADAS 1.1 D",
      paragraph: `This is a compact microstrip directive LPD antenna covering from 400MHz up to 7.2GHz.
                  The gain and radiation pattern are quite stable within all the operational antenna’s bandwidth.
                  The polarization is linear and by rotating the antenna you can set the polarization to H, V or slant polarization.
                  The antenna is made up using 2 sub-antennas combined with a diplexer, providing a smooth and uniform response.`,
      img_num: "3"
    },
    {
      header: "ADAS 2.1 D",
      paragraph: `This is a compact microstrip directive Vivaldi antenna covering from 500MHz up to 7.2GHz with a gain of up to 12 dBi.
                  The polarization is dual linear and by rotating the antenna you can set the polarization to H&V or slant polarization.`,
      img_num: "4"
    }
  ];

  @ViewChild("machine_line")
  machine_line: ElementRef;

  @ViewChild("write_line")
  writeLine: ElementRef;

  async ngAfterViewInit(): Promise<void> {

    this.homeService.init(this.writeLine, this.elements);
  }

  handleResize(event)
  {
    this.homeService.setSizes(this.elements);
  }
}
