class ErrorValidacion extends Error {
    constructor(mensaje: string) {
        super(mensaje)
        this.name = "Error en el formulario"
    }
}

function formulario(nombre: string, apellido: string){

    let user = nombre + ' ' + apellido

    if (!nombre && !apellido) {
        throw new ErrorValidacion("Ambos campos vacios")
    }
    if (!nombre) {
        throw new ErrorValidacion("Campo nombre vacio")
    }
    if (!apellido) {
        throw new ErrorValidacion("Campo apellido vacio")
    }
    return user
}

try {
    let usuario = formulario( , )
    console.log(usuario)
}   catch(error) {
    console.log("Dato invalido: " + error.message)
}