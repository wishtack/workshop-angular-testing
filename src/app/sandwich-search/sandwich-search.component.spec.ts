import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SandwichSearchComponent } from './sandwich-search.component';

describe('SandwichSearchComponent', () => {
  let component: SandwichSearchComponent;
  let fixture: ComponentFixture<SandwichSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SandwichSearchComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SandwichSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
