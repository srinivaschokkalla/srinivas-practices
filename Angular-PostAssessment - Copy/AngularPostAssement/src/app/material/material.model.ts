import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatBadgeModule} from '@angular/material/badge';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import{MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import{MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import{   MatCheckboxModule} from '@angular/material/checkbox';
import{  MatAutocompleteModule} from '@angular/material/autocomplete';

import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';

const materialComponents=[    
                      MatButtonModule,
                      MatToolbarModule,
                      MatIconModule,
                      MatBadgeModule,
                      MatProgressSpinnerModule,
                      MatSidenavModule,
                      MatMenuModule,
                      MatFormFieldModule,
                      MatInputModule,
                      MatListModule,
                      MatGridListModule,
                      MatCardModule,
                      MatStepperModule,
                      MatCheckboxModule,
                      MatAutocompleteModule,
                      MatTableModule,
                      MatIconModule,
                      MatDialogModule,
                      MatPaginatorModule

                  




];
@NgModule({
  imports: [materialComponents],
    exports: [materialComponents],
    providers:[MatDialogModule],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MaterialModule { }
