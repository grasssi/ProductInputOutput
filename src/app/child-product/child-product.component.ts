import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-product',
  templateUrl: './child-product.component.html',
  styleUrls: ['./child-product.component.css']
})
export class ChildProductComponent implements OnInit {

  @Input() listProductChild?: any;
  @Output() updateProd = new EventEmitter<number>();
  @Output() deleteProd = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {

  }
  onUpdate(i: number) {
    this.updateProd.emit(i);
  }
  onDelete(i: number) {
    this.deleteProd.emit(i);
  }
}
