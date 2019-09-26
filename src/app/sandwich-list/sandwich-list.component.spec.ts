import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Sandwich } from '../sandwich-core/sandwich';

import { SandwichListComponent } from './sandwich-list.component';

export function getDataRoleSelector(dataRole: string) {
  return By.css(`[data-role="${dataRole}"]`);
}

export function getSandwichNameList(debugElement: DebugElement) {
  return debugElement
    .queryAll(getDataRoleSelector('sandwich-name'))
    .map(element => element.nativeElement.textContent);
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

  it('should show sandwiches', () => {
    component.sandwichList = [burger, butterAndButter];

    fixture.detectChanges();

    const sandwichNameList = getSandwichNameList(fixture.debugElement);

    expect(sandwichNameList).toEqual(['Burger', 'Butter & Butter']);
  });
});
