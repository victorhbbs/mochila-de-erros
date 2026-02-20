import { Component } from '@angular/core';
import { MochilaCard } from '../../../models/mochilas-card.model';
import { MochilasService } from '../../../services/mochilas.service';
import { MochilaCardComponent } from '../../../components/mochila-card/mochila-card';
import { CommonModule } from '@angular/common';
import { Rodape } from '../../../components/rodape/rodape';
import { CriarMochilaModal } from '../../../components/criar-mochila-modal/criar-mochila-modal';
import { FormsModule } from '@angular/forms';
import { UsoPlano } from '../../../models/uso-plano.model';
import { UsuarioService } from '../../../services/usuario.service';
import { ConfirmarExclusaoModal } from '../../../components/confirmar-exclusao-modal/confirmar-exclusao-modal';

@Component({
  selector: 'app-mochilas-page',
  imports: [
    MochilaCardComponent,
    CommonModule, 
    Rodape, 
    CriarMochilaModal, 
    FormsModule,
    ConfirmarExclusaoModal
  ],
  templateUrl: './mochilas-page.html',
  styleUrl: './mochilas-page.scss',
})

export class MochilasPage {
  mochilas: MochilaCard[] = [];
  carregando = true;

  usoPlano?: UsoPlano;
  planoLabel = 'gratuito';

  modalCriarAberto = false;   // ✅ ADICIONADO
  modalExcluirAberto = false;
  mochilaSelecionada?: MochilaCard;

  private userId = 'f5555320-e445-48f7-90f6-232013934910';

  constructor(
    private mochilasService: MochilasService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    this.carregarMochilas();
    this.carregarUsoPlano();
  }

  carregarMochilas() {
    this.mochilasService.getCards(this.userId).subscribe(data => {
      this.mochilas = data;
      this.carregando = false;
    });
  }

  abrirConfirmacao(mochila: MochilaCard) {
    this.mochilaSelecionada = mochila;
    this.modalExcluirAberto = true;
  }

  fecharConfirmacao() {
    this.modalExcluirAberto = false;
    this.mochilaSelecionada = undefined;
  }

  confirmarExclusao() {
    if (!this.mochilaSelecionada) return;

    const id = this.mochilaSelecionada.id;

    this.mochilasService.delete(id, this.userId).subscribe(() => {
      this.mochilas = this.mochilas.filter(m => m.id !== id);
      this.fecharConfirmacao();
      this.carregarUsoPlano();
    });
  }

  carregarUsoPlano() {
    this.usuarioService.getUsoPlano(this.userId).subscribe(data => {
      this.usoPlano = data;
      this.planoLabel = data.plano.toLowerCase();
    });
  }
}