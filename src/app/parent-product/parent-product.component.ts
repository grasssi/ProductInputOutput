import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-parent-product',
  templateUrl: './parent-product.component.html',
  styleUrls: ['./parent-product.component.css']
})
export class ParentProductComponent implements OnInit {
  submitted = false;
  showUpdateButton=false;
  index: any;
  productForm = new FormGroup({
    name: new FormControl('', Validators.required),
    describe: new FormControl('', Validators.required),
  })
  listProduct: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addProduct() {

    this.submitted = true;
    if (this.productForm.valid) {
      this.listProduct.push(this.productForm.value);
      this.submitted = false;
      this.productForm.reset();
    }
  }
  deleteProd(i: number) {
    this.listProduct.splice(i, 1)
  }
  updateProd(i: number) {
    this.showUpdateButton=true;
    this.productForm.patchValue(this.listProduct[i]);
    this.index = i;
  }
  resetForm() {
    this.productForm.reset();
  }
  saveUpdate() {

    this.submitted = true;
    if (this.productForm.valid) {
      this.listProduct.splice(this.index, 1, this.productForm.value)
      this.submitted = false;
      this.productForm.reset();
      this.showUpdateButton=false;
    }
  }
}


