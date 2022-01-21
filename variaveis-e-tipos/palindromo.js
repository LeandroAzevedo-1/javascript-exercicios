// solução 1
function verificaPalindromo(string) {
    //Verficação , !string quer dizer, se string não existe retorne msg
	if (!string) return "string inexistente";
	console.log(string === string.split('').reverse().join(''));
}
verificaPalindromo('ama'); //True



// solução 2

// teste de mesa 
// omo 
// 012
// abbbba
// 012345

function varificaPalindromo2(string) {
	if (!string) return "string inexistente"; //Se a string existe faz outro if 
	if (!string.length) return;

    //loop for para variável i for = 0;, vamos dividir a metade do array pela metade, por isso uso o numero 2 e incremento mais 1 
	for (var i = 0; i < string.length / 2; i++) {
        
		if (string[i] !== string[string.length - 1 - i]) {
			return console.log(false);
		}
	}
	return console.log(true);
}

varificaPalindromo2('asa');