import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { imagesPath } from '../path';

import { Router } from '@angular/router';
import { data } from '../home/details/paticularDetails';

import { particularDetails } from '../home/detailsTypes';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements AfterViewInit{

  constructor(private router: Router){}

  domesticPath = imagesPath + "home/content"
  detailsParent: particularDetails;

  navigate()
  {
    this.router.navigate(["/contact"]);
  }

  @ViewChild("products")
  productsElement: ElementRef;

  ngAfterViewInit(): void {
    let hoverElement: HTMLElement | any;

    function showProductDetails(e: Event | any)
    {
      if(!e.target['classList'].contains("cover")) return;
      const id = e.target.getAttribute("data-id");

      const newData = Object.assign({}, data[`${id}`]);
      newData.id = Number(id) + 1;

      this.detailsParent = newData;
    }

    this.productsElement.nativeElement
    .addEventListener("click", showProductDetails.bind(this));

    // css animation
    function moveElement(e: Event)
    {
      if(!e.target['classList'].contains("cover")){
        if(hoverElement) hoverElement.classList.remove("raise");
        return;
      };

      if(hoverElement) hoverElement.classList.remove("raise");

      e.target['parentElement'].classList.add("raise");
      hoverElement = e.target['parentElement'];
    };

    this.productsElement.nativeElement
    .addEventListener("mousemove", moveElement)
  }

  hideDetails()
  {
    this.detailsParent = null;
  }
}
