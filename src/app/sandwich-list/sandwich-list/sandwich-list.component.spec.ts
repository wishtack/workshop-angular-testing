import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Sandwich } from '../../sandwich-search/sandwich';

import { SandwichListComponent } from './sandwich-list.component';

describe('SandwichListComponent', () => {
  let component: SandwichListComponent;
  let fixture: ComponentFixture<SandwichListComponent>;

  const burger = new Sandwich({
    id: 'burger',
    name: 'Burger',
    price: 5
  });
  const butterAndButter = new Sandwich({
    id: 'butter-and-butter',
    name: 'Butter & Butter',
    price: 10
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SandwichListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SandwichListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('🚧 should show sandwiches', () => {
    component.sandwichList = [burger, butterAndButter];

    const sandwichNameList = fixture.debugElement
      /* Don't do this at home, there's way cleaner. */
      .queryAll(By.css('span'))
      .map(element => element.nativeElement.textContent);

    expect(sandwichNameList).toEqual(['Burger', 'Butter & Butter']);
  });
});
