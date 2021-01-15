import { Component, OnInit } from '@angular/core';
import { Persona } from './persona';

@Component({
  selector: 'app-estructura-persona',
  templateUrl: './estructura-persona.component.html',
  styleUrls: ['./estructura-persona.component.css']
})

export class EstructuraPersonaComponent implements OnInit {

  public nombre: string;
  public apellido: string;
  public edad: string;
  public sexo: string;
  public persona: Persona;

  constructor() {
    this.persona = new Persona()
    this.nombre = this.persona.getNombre("Denisse");
    this.apellido = this.persona.getApellido("Medina");
    this.edad = this.persona.getEdad("19");
    this.sexo = this.persona.getSexo("Femenino");
  }
  ngOnInit(): void {
  }

}
