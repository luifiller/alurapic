import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo/photo.component';


@NgModule({
  declarations: [ PhotoComponent ],
  exports: [PhotoComponent],
  imports: [
    CommonModule
  ]
})
export class PhotosModule { }
