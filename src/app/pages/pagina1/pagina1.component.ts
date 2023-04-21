import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component 
  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {

  nombre: string = 'Seba';
  segundos: number = 0;
  timerSubscription!: Subscription;

  constructor() {
    //Primero se dispara el constructor
    //Aquí se deben hacer las inyecciones de dependencias que necesitemos
    //O también si necesitamos inicializar algo antes que el HTML sea construido
    console.log('constructor');
    
  }

  ngOnInit(): void {
    //Segundo se dispara el ngOnInit
    //El componente ya está inicializado y tenemos acceso al HTML...podemos hacer peticiones HTTP y traer info
    console.log('ngOnInit');

    //Operador de "rxjs" para ejecutar algo cada cierto intervalo de tiempo (en milisegundos)
    this.timerSubscription = interval(1000).subscribe(i => {
      this.segundos = i;
    });
    //Este operador es infinito, hasta que no lo frene, queda en memoria ejecutando.
    //Tener en cuenta que si se oculta/destruye el componente, igual sigue en memoria ejecutando...produce memory leak (fuga de memoria)
    //Por eso se debería limpiar en el ngOnDestroy
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Solo se ejecuta si tengo algún @Input bindeando alguna propiedad del DOM
    //Y se dispara cuando el valor del @Input cambia
    console.log('ngOnChanges');
  }

  ngDoCheck(): void {
    //Se dispara cada vez que Angular ejecuta el ciclo de detección de cambios...usarlo con criterio
    console.log('ngDoCheck');
  }
  
  ngAfterContentInit(): void {
    //Se dispara cada vez que Angular ejecuta el ciclo de detección de cambios...usarlo con criterio
    console.log('ngAfterContentInit');
  }
  
  ngAfterContentChecked(): void {
    //Se dispara cada vez que Angular ejecuta el ciclo de detección de cambios...usarlo con criterio
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    //Se dispara cada vez que Angular ejecuta el ciclo de detección de cambios...usarlo con criterio
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    //Se dispara cada vez que Angular ejecuta el ciclo de detección de cambios...usarlo con criterio
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.timerSubscription.unsubscribe();
  }

  guardar() {
  }
}
