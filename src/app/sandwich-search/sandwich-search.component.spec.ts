import { of } from 'rxjs';
import { Cart } from '../cart/cart.service';
import { Sandwich } from '../sandwich-core/sandwich';
import { SandwichSearchComponent } from './sandwich-search.component';
import { SandwichSearch } from './sandwich-search.service';

describe('SandwichSearchComponent', () => {
  let cart: Cart;
  let sandwichSearch: SandwichSearch;
  let component: SandwichSearchComponent;

  beforeEach(() => {
    cart = new Cart();
    sandwichSearch = new SandwichSearch();
    component = new SandwichSearchComponent(cart, sandwichSearch);
  });

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

    expect(component.sandwichList).toEqual(sandwichList);
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
