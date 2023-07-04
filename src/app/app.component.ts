import { Component, OnInit } from '@angular/core';
import { ArtService } from './servicio/art.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  artworks: any[] = [];

  constructor(private artService: ArtService) { }

  ngOnInit() {
    this.artService.getArtworks()
      .subscribe(response => {
        console.log(response);
         this.artworks = response; // Ajusta esto según la estructura de la respuesta
      });
  }


}
