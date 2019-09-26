import { Injectable } from '@angular/core';
import { Sandwich } from '../sandwich-core/sandwich';

@Injectable({
  providedIn: 'root'
})
export class Cart {
  /**
   * @deprecated 🚧 Work in progress.
   */
  addSandwich(sandwich: Sandwich) {
    throw new Error('🚧 work in progress!');
  }
}
