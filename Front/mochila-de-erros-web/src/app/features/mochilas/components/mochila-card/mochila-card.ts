import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MochilaCard } from '../../models/mochilas-card.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mochila-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mochila-card.html',
  styleUrls: ['./mochila-card.scss']
})
export class MochilaCardComponent {
  @Input() card!: MochilaCard;
  @Output() solicitarExclusao = new EventEmitter<MochilaCard>();

  constructor(private router: Router) {}

  pedirExclusao() {
    this.solicitarExclusao.emit(this.card);
  }

  abrirMochila() {
    this.router.navigate([
      '/mochilas',
      this.card.id,
      'questoes'
    ]);
  }
}