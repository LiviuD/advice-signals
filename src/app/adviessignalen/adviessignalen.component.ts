import { Component, OnInit } from '@angular/core';
import { Klanten } from '../models/klanten';
import { KlantenService } from '../services/klanten.service';

@Component({
  selector: 'app-adviessignalen',
  templateUrl: './adviessignalen.component.html',
  styleUrls: ['./adviessignalen.component.css']
})
export class AdviessignalenComponent implements OnInit {
  client!: Klanten;
  years: number[] = [];
  constructor(private klantenService: KlantenService) { }

  ngOnInit(): void {
    this.client = this.klantenService.selectedClient;
    this.years = [...new Set(this.client.AdviceSignals.flatMap(x => x.CreateDate.getFullYear()))];
  }

}
