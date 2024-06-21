import {InfoCarta, cartas} from "./modelo";

const bucleCartas = (cartas:InfoCarta[]) => {
    for (let i = 0; i < cartas.length; i++){
        const dataIndiceId = `[data-indice-id="${i}"]`;
        const elementoDiv = document.querySelector(`div${dataIndiceId}`);
        if(elementoDiv instanceof HTMLDivElement && elementoDiv !== null && elementoDiv !== undefined)(
            elementoDiv.addEventListener("click", function() {
                const elementoImg = document.querySelector(`img${dataIndiceId}`)
                if(elementoImg instanceof HTMLImageElement && elementoImg !== null && elementoImg !== undefined){
                    elementoImg.src = cartas[i].imagen
                }
            })
        );
    }
};
console.log(bucleCartas(cartas));

cartas.sort(() => 0.5 - Math.random()); // Ordenar de forma aleatoria
