import { NgModule } from '@angular/core';  
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; 
import { MatSnackBar } from '@angular/material/snack-bar'; 
import {MatTableModule} from '@angular/material/table'; 

@NgModule({
  exports:[ 
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule, 
  ],
  providers:[MatSnackBar]
})
export class MaterialModule { }