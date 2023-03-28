import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  photos: Array<any> = [
    {
      url: 'https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg',
      description: 'Imagem de leão',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2016/08/20/06/49/panthera-leo-1606964_1280.jpg',
      description: 'Imagem de leoa',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Suricato_perfil_Steam_2020.jpg',
      description: 'Imagem de suricato',
    },
  ];
}
