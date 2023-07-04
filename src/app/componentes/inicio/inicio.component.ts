import { Component } from '@angular/core';
import { ArtService } from 'src/app/servicio/art.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
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
