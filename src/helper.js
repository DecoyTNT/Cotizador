export const obtenerDiferenciaYear = year => {
    return new Date().getFullYear() - year;
}

export const calcularMarca = (marca) => {
    let incremento;

    switch (marca) {
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico':
            incremento = 1.05;
            break;
        case 'europeo':
            incremento = 1.30;
            break;
        default:
            break;
    }

    return incremento;
}

export const calcularPlan = plan => {

    if (plan === 'basico') {
        return 1.2;
    } else {
        return 1.5;
    }
}

export const primerMayuscula = texto => {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}