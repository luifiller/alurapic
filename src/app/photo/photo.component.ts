import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {
  // quando inserido o decorator "@Input()" às propriedades, estas se tornam inbounding properties, ou seja, receberá o seu valor de forma declarativa (o que está declarado lá no template do app.component.ts)
  @Input() url: string = '';
  @Input() description: string = '';

}
