import { of } from 'rxjs';
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

    const component = new SandwichSearchComponent(service);

    component.searchSandwiches('Butter & Butter');

    expect(component.sandwichList).toEqual(sandwichList);
  });

  xit('🚧 should add sandwich to cart when buy button is clicked', () => {
    // @todo give a fake cart to the component
    // @todo call buySandwich method
    // @todo make sure fake cart is called
    throw new Error('🚧 work in progress!');
  });
});
