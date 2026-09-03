import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarjetaActividad } from './actividades/tarjeta-actividad/tarjeta-actividad';
import { ResumenActividades } from './actividades/resumen-actividades/resumen-actividades';
import { ListaActividades } from './actividades/lista-actividades/lista-actividades';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TarjetaActividad, ResumenActividades, ListaActividades],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('panel-actividades');
}
