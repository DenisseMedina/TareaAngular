export class Persona {
  public nombre: string;
  public apellido: string;
  public edad: string;
  public sexo: string;

  getNombre(nombre){
    this.nombre = nombre;
    return this.nombre
  }
  getApellido(apellido){
    this.apellido = apellido;
    return this.apellido
  }
  getEdad(edad){
    this.edad = edad;
    return this.edad
  }
  getSexo(sexo){
    this.sexo = sexo;
    return this.sexo
  }
}
