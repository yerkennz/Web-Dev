import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];

  share(link: string) {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  formatedPrice(price: number): string {
    return price.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
  }
  redirect(link: string){
    window.open("http://telegram.me/share/url?url=" + link)
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/