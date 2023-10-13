import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Input } from "@angular/core";

import { gsap } from 'gsap/gsap-core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['../../details.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent implements AfterViewInit{
  
  @Input() detailsChild;
  @Output() toParent: EventEmitter<object> = new EventEmitter<object>();

  @ViewChild("detailsContainer")
  detailsContainer: ElementRef;

  ngAfterViewInit(): void {
    const properties: HTMLCollection = this.detailsContainer.nativeElement.getElementsByClassName("properties");

    Array.from(properties)
    .forEach((e, id) => {
      gsap.fromTo(e, {opacity: 0}, {opacity: 1}).delay(id + 1)
    });
  }

  hideDetails(): void
  {
    this.toParent.emit(null);
  }

  protected isNumber(width): boolean
  {
    return typeof width == "number";
  }

}
