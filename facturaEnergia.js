function consumoMensual (){
    let consumo = Number(prompt("Ingrese el consumo en de energia representado en Kwh: "))
      return consumo
}
let consumo = consumoMensual();

function tarifaMensual (){
    let tarifa = Number(prompt("Ingrese la tarifa por kwh: "))
    return tarifa
}

const tarifa = tarifaMensual();

const cargoFijo = function (){
    const valorFijo = 3500
    return valorFijo
}

cargoFijo()

const iva = function (){
    const ivaFijo = 0.19
    return ivaFijo
}

const ivaFijo = iva()

let subtotal = () => {
    return consumo * tarifa
}

subtotal()

let netoPagar = () => {  
    return subtotal() + ivaCalculado() + cargoFijo()
}

netoPagar()

function resumenFactura(){
    console.log(`RESUMEN DE FACTURA\n\nConsumo de energia en khw  ${consumo}\nTarifa de cobro por khw $ ${tarifa} pesos\n\nSubtotal ${subtotal()}\nIVA ${ivaCalculado()}\nCargo fijo ${cargoFijo()}\n\nTOTAL A PAGAR ${netoPagar()}`)
}

resumenFactura()