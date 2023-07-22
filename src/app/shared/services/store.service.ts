import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

import { Observable, of } from 'rxjs';

import { products } from '../mockup_api/products.mockup';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of([ ...products ]);
  }
}
