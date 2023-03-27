import { Component } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {
  description = 'Leão';
  url = 'https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg'
}
