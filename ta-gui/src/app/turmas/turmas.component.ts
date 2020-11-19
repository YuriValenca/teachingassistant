import { Component, OnInit } from '@angular/core';
import { Turma } from '../../../../common/turma';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.css']
})
export class TurmasComponent implements OnInit {
  turmas: Turma[] = [];
  turmasEscolhidas: string[] = [];
  modalOpcoesComparacaoAtivo: boolean = false;
  modalTurmasAtivo: boolean = false;

  constructor() { }

  ngOnInit() {

  }

  alternarVisualizacaoOpcoesComparacao(): void {
    this.modalOpcoesComparacaoAtivo = !this.modalOpcoesComparacaoAtivo;
    this.turmasEscolhidas = [];
  }

  alternarVisualizacaoTurmas(): void {
    this.alternarVisualizacaoOpcoesComparacao();
    this.modalTurmasAtivo = !this.modalTurmasAtivo;
  }

  atualizarTurmasEscolhidas(descricao: string): void {
    if (!this.turmasEscolhidas.find(turma => turma === descricao)) {
      this.turmasEscolhidas.push(descricao);
    } else {
      this.turmasEscolhidas = this.turmasEscolhidas.filter(turma => turma !== descricao);
    }
  }

  compararTodas(): void {
    this.turmasEscolhidas = this.turmas.map(turma => turma.descricao);
  }
  
  compararUltimasQuatro(): void {
    this.turmasEscolhidas = [];
    for (let i = this.turmas.length; this.turmasEscolhidas.length < 4; i--) {
      this.turmasEscolhidas.push(this.turmas[i].descricao);
    }
  }
}
