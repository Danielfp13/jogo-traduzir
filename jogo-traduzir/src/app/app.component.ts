import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public jogoEmEndamento: boolean = true;
  public tipoEncerramento: string;

  public encerrarJogo(tipo: string): void{

      this.jogoEmEndamento = false;
      this.tipoEncerramento = tipo;
  }

  public reiniciarJogo(): void{
    this.jogoEmEndamento = true;
    this.tipoEncerramento = ''
  }
}



