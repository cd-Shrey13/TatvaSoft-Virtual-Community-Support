import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-frame',
  standalone: true,
  imports: [],
  templateUrl: './photo-frame.component.html',
  styleUrl: './photo-frame.component.css'
})
export class PhotoFrameComponent implements OnInit {
  url = "https://dog.ceo/api/breeds/image/random";
  imageUrl = ""
  private http: HttpClient;

  constructor() {
    this.http = inject(HttpClient)
  }


  ngOnInit(): void {
    this.setImageUrl()
  }
  setImageUrl() {
    this.http.get<{ message: string }>(`${this.url}`).subscribe(
      response => {
        this.imageUrl = response.message;
      }
    )
  }

}
