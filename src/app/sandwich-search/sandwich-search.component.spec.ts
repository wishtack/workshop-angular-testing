import { of } from 'rxjs';
import { Cart } from '../cart/cart.service';
import { Sandwich } from './sandwich';
import { SandwichSearchComponent } from './sandwich-search.component';
import { SandwichSearch } from './sandwich-search.service';

describe('SandwichSearchComponent', () => {
  it('should search and display sandwiches', () => {
    const sandwichList = [
      new Sandwich({
        id: 'butter-and-butter',
        name: 'Butter & Butter',
        price: 5
      })
    ];
    const service = new SandwichSearch();

    spyOn(service, 'searchSandwiches').and.returnValue(of(sandwichList));

    const component = new SandwichSearchComponent(null, service);

    component.searchSandwiches('Butter & Butter');

    expect(component.sandwichList).toEqual(sandwichList);
    expect(service.searchSandwiches).toHaveBeenCalledWith('Butter & Butter');
  });

  it('should add sandwich to cart when buy button is clicked', () => {
    const cart = new Cart();

    const component = new SandwichSearchComponent(cart, null);

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
