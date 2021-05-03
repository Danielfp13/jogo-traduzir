import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

 private tipo: string = 'Aprendendo Inglês'; 

  constructor() { }

  public getTitulo(): string{
    return this.tipo;
  }

  ngOnInit(): void {
  }

}
