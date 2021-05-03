import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock'
@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza a frase.';
  public fraseDigitada: string = '';
  public rodada: number = 0;
  public rodadaFrase: Frase;

  
  public tentativas: number = 3;
  public progresso: number = 0;

  @Output()
  public encerrarJogo: EventEmitter<string> = new EventEmitter;

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log(`O componente painel foi destruido!!!`);   
  }
  public atualizaResposta(resposta: Event): void {
    this.fraseDigitada = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta(): void{
    
    if(this.frases[this.rodada].frasePtBr ===  this.fraseDigitada){
     
      this.rodada ++;

      if(this.rodada === 4){
          this.encerrarJogo.emit('vitoria');
      }

      this.progresso += (100/ this.frases.length);

      this.atualizaRodada();
    }else{
     this.tentativas --;
     if(this.tentativas <= -1){
      this.encerrarJogo.emit('derrota');
     }
    }
  }

  public atualizaRodada() {
    this.rodadaFrase = this.frases[this.rodada];
    this.fraseDigitada= ''
  }

}
