import { CompanyRoutingModule } from './company-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule
  ],
  declarations: [CompanyComponent]
})
export class CompanyModule { }
