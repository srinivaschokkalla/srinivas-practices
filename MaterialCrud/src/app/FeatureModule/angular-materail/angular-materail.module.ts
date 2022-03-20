import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSortModule,
    MatCardModule,
    MatIconModule,
    MatTableModule
  ],
  exports:[
    MatInputModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSortModule,
    MatCardModule,
    MatIconModule,
    MatTableModule
  ]
})
export class AngularMaterailModule { }
