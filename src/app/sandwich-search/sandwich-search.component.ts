import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cart } from '../cart/cart.service';
import { SandwichListModule } from '../sandwich-list/sandwich-list/sandwich-list.component';
import { Sandwich } from './sandwich';
import { SandwichSearch } from './sandwich-search.service';

@Component({
  selector: 'app-sandwich-search',
  templateUrl: './sandwich-search.component.html',
  styleUrls: ['./sandwich-search.component.css']
})
export class SandwichSearchComponent implements OnInit {
  sandwichList: Sandwich[];

  constructor(private _cart: Cart, private _sandwichSearch: SandwichSearch) {}

  ngOnInit() {}

  searchSandwiches(keywords: string) {
    this._sandwichSearch
      .searchSandwiches(keywords)
      .subscribe(sandwichList => (this.sandwichList = sandwichList));
  }

  buySandwich(sandwich: Sandwich) {
    this._cart.addSandwich(sandwich);
  }
}

@NgModule({
  declarations: [SandwichSearchComponent],
  imports: [CommonModule, SandwichListModule],
  exports: [SandwichSearchComponent]
})
export class SandwichSearchModule {}
