import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-muestra-nombre',
  templateUrl: './muestra-nombre.component.html',
  styles: [
  ]
})
export class MuestraNombreComponent implements OnInit, OnChanges {

  @Input() nombre!: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Solo se ejecuta si tengo algún @Input bindeando alguna propiedad del DOM
    //Y se dispara cuando el valor del @Input cambia
    console.log('ngOnChanges');
    console.log(changes);
  }
}
