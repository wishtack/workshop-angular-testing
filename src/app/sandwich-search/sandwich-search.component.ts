import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sandwich-search',
  templateUrl: './sandwich-search.component.html',
  styleUrls: ['./sandwich-search.component.css']
})
export class SandwichSearchComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

@NgModule({
  declarations: [SandwichSearchComponent],
  imports: [CommonModule],
  exports: [SandwichSearchComponent]
})
export class SandwichSearchModule {}
