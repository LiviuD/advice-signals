import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Klanten } from '../models/klanten';
import { KlantenService } from '../services/klanten.service';

@Component({
  selector: 'app-klanten',
  templateUrl: './klanten.component.html',
  styleUrls: ['./klanten.component.css']
})
export class KlantenComponent implements OnInit {
  client!: Klanten;
  clientId: number = 0;

  constructor(private klantenService: KlantenService, public router: Router,) { }

  ngOnInit(): void {
    this.clientId = 0;//TODO get the client id, maybe from the route TBD
    this.client = this.klantenService.getClient(this.clientId);
  }
}
