import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  OnInit,
  Output
} from '@angular/core';
import { Sandwich } from '../sandwich-core/sandwich';

@Component({
  selector: 'app-sandwich-list',
  templateUrl: './sandwich-list.component.html',
  styleUrls: ['./sandwich-list.component.css']
})
export class SandwichListComponent implements OnInit {
  @Input() sandwichList: Sandwich[];
  @Output() sandwichBuy = new EventEmitter<Sandwich>();

  constructor() {}

  ngOnInit() {}

  buySandwich(sandwich: Sandwich) {
    this.sandwichBuy.emit(sandwich);
  }
}

@NgModule({
  declarations: [SandwichListComponent],
  imports: [CommonModule],
  exports: [SandwichListComponent]
})
export class SandwichListModule {}
