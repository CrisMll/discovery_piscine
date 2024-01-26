function devolverArgumentos(...argumentos) {
    const listaArgumentos = argumentos.slice(0, 3);

    if (listaArgumentos.length === argumentos.length) {
        console.log(listaArgumentos);
    } else {
        console.log(`Solo se aceptan 3 argumentos, que son: ${listaArgumentos}`);
    }
}

console.log(devolverArgumentos());



