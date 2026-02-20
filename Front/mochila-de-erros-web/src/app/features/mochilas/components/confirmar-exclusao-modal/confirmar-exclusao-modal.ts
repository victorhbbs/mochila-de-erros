import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirmar-exclusao-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirmar-exclusao-modal.html',
  styleUrl: './confirmar-exclusao-modal.scss',
})
export class ConfirmarExclusaoModal {
  @Input() nome = '';
  @Output() cancelarEvt = new EventEmitter<void>();
  @Output() confirmarEvt = new EventEmitter<void>();

  cancelar() {
    this.cancelarEvt.emit();
  }

  confirmar() {
    this.confirmarEvt.emit();
  }
}