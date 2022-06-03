class Persona {
    private nombre: string;
    private apellido: string;
    private edad: number;
    constructor(nombre: string, apellido: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    };
    nomCompleto(): string {
        return 'Sr/a ' + this.nombre + " " + this.apellido + "."
    };
    mostrarEdad(): string {
        return `La edad de esta persona es de ${this.edad}`
    }
    esMayor(): boolean {
        return this.edad > 18
    }

};



export default Persona;