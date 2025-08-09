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