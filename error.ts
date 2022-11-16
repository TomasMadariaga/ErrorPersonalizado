function sacarArea(base: number, altura: number): number {
    if (base == 0){
        throw new Error("La base no puede ser cero")
    }

    let sumaTotal: number = 0
    sumaTotal = base * altura
    return sumaTotal
}

try {
    sacarArea(0, 1)
} catch (error) {
    console.log("Hubo un problema: " + error.message)
}