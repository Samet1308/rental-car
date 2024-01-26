import { Component } from '@angular/core';
import {Brand} from "./brand";
import {DataService} from "../services/data-service.service";
import {AlertifyService} from "../services/alertify.service";

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent {
  brands: any
  selectedBrandIndex: number | null = null;

  selectBrand(index: number): void {
    this.selectedBrandIndex = index;
  }
    constructor(
      private dataService: DataService,
      private alertifyService : AlertifyService
    ) {
    }
    title = "Marka"


  ngOnInit():void{
    this.dataService.getCarData().subscribe(response => {
      console.log(response)
      this.brands=response});
  }

}
