import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent implements OnInit {

  data: any;

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get('./assets/terms.json').subscribe((data) => {
      this.data = data;
    });
  }
}
