import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Scavenger } from '@wishtack/rx-scavenger';
import { Sandwich } from '../../sandwich-search/sandwich';
import { SandwichListComponent } from './sandwich-list.component';

export function getDataRoleSelector(dataRole: string) {
  return By.css(`[data-role="${dataRole}"]`);
}

export function getSandwichNameList(debugElement: DebugElement) {
  return debugElement
    .queryAll(getDataRoleSelector('sandwich-name'))
    .map(element => element.nativeElement.textContent);
}

function clickFirstBuyButton(debugElement: DebugElement) {
  debugElement
    .query(getDataRoleSelector('sandwich-buy-button'))
    .triggerEventHandler('click', {});
}

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

  let scavenger: Scavenger;
  beforeEach(() => (scavenger = new Scavenger()));
  afterEach(() => scavenger.unsubscribe());

  it('should show sandwiches', () => {
    component.sandwichList = [burger, butterAndButter];

    fixture.detectChanges();

    const sandwichNameList = getSandwichNameList(fixture.debugElement);

    expect(sandwichNameList).toEqual(['Burger', 'Butter & Butter']);
  });

  it('trigger sandwichBuy event', () => {
    const observer = jasmine.createSpy('observer');

    const sandwichList = [burger, butterAndButter];

    component.sandwichList = sandwichList;

    fixture.detectChanges();

    component.sandwichBuy.pipe(scavenger.collect()).subscribe(observer);

    clickFirstBuyButton(fixture.debugElement);

    expect(observer).toHaveBeenCalledWith(sandwichList[0]);
  });
});
