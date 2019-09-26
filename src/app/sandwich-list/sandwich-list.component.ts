import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { Sandwich } from '../sandwich-core/sandwich';

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
