import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtService {
  private apiUrl = 'https://api.artic.edu/api/v1/artworks';

  constructor(private http: HttpClient) { }

  getArtworks() {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Implementar otras operaciones CRUD según sea necesario
}
