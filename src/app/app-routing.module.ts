import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "products", loadChildren: () => import("./products/products.module").then(m => m.ProductsModule)},
  {path: "contact", loadChildren: () => import("./contact/contact.module").then(m => m.ContactModule)},
  
  {path: "news", loadChildren: () => import("./news/news.module").then(m => m.NewsModule)},
  {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
