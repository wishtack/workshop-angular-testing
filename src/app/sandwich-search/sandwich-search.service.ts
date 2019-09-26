import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sandwich } from '../sandwich-core/sandwich';

@Injectable({
  providedIn: 'root'
})
export class SandwichSearch {
  constructor() {}

  /**
   * @deprecated 🚧 Work in progress.
   */
  searchSandwiches(keywords: string): Observable<Sandwich[]> {
    throw new Error('🚧 work in progress!');
  }
}
