import { Component, Input, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sandwich } from '../../sandwich-search/sandwich';

@Component({
  selector: 'app-sandwich-list',
  templateUrl: './sandwich-list.component.html',
  styleUrls: ['./sandwich-list.component.css']
})
export class SandwichListComponent implements OnInit {
  @Input() sandwichList: Sandwich[];

  constructor() {}

  ngOnInit() {}
}

@NgModule({
  declarations: [SandwichListComponent],
  imports: [CommonModule],
  exports: [SandwichListComponent]
})
export class SandwichListModule {}
