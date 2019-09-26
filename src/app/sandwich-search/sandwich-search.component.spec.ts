import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { Cart } from '../cart/cart.service';
import { Sandwich } from '../sandwich-core/sandwich';
import { SandwichSearchComponent } from './sandwich-search.component';
import { SandwichSearch } from './sandwich-search.service';

describe('SandwichSearchComponent', () => {
  let component: SandwichSearchComponent;
  let fixture: ComponentFixture<SandwichSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SandwichSearchComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SandwichSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /* @todo TestBed.get is replaced by TestBed.inject in Angular 9. */
  let cart: Cart;
  beforeEach(() => (cart = TestBed.get(Cart)));
  let sandwichSearch: SandwichSearch;
  beforeEach(() => (sandwichSearch = TestBed.get(SandwichSearch)));

  it('should search and display sandwiches', () => {
    const sandwichList = [
      new Sandwich({
        id: 'butter-and-butter',
        name: 'Butter & Butter',
        price: 5
      })
    ];

    spyOn(sandwichSearch, 'searchSandwiches').and.returnValue(of(sandwichList));

    component.searchSandwiches('Butter & Butter');

    fixture.detectChanges();

    /* Make sure that `sandwichList` are transmitted to <app-sandwich-list>. */
    const sandwichListEl = fixture.debugElement.query(
      By.css('app-sandwich-list')
    );
    expect(sandwichListEl.properties.sandwichList).toEqual(sandwichList);

    expect(sandwichSearch.searchSandwiches).toHaveBeenCalledWith(
      'Butter & Butter'
    );
  });

  it('should add sandwich to cart when buy button is clicked', () => {
    const sandwich = new Sandwich({
      id: 'butter-and-butter',
      name: 'Butter & Butter',
      price: 5
    });

    spyOn(cart, 'addSandwich');

    component.buySandwich(sandwich);

    expect(cart.addSandwich).toHaveBeenCalledWith(sandwich);
  });
});
