
//Array

function substituiNumerosPares(array) {
    //verificação do array 
	if (!array.length) return console.log(-1);
    if (!array) return -1;

	const naoZero = (num) => num !== 0;
	const numPar = (num) => num % 2 === 0;
    //para cada indice 0 incrementa mais 1
	for (let i = 0; i < array.length; i++) {
		if (numPar(array[i]) && naoZero(array[i])) {
            //imprime , faz também concatenação com a variável 
			console.log(`substituindo ${array[i]} por 0...`);
			array[i] = 0;
		} else if (!naoZero(array[i])) {
			console.log('Ops, você já vale 0!');
		}
	}
	console.log(array);
}

substituiNumerosPares([2, 0, 3, 5]);