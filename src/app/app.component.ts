import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MouseService } from './mouse/mouse.service';

import { CacheService } from 'ng2-cache';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  constructor(private mouseService: MouseService, private _cacheService: CacheService){}

  title: string = 'anti-drone';

  @ViewChild("nav_list")
  navList: ElementRef | undefined;

  @ViewChild("bar_menu")
  barMenu: ElementRef | undefined;

  public ngOnInit(): void {
    this.mouseService.setMouseStyle();
  }

}