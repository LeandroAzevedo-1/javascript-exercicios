
//Crie uma função que recebe dois números como parâmetros.

function compraraNumeros(num1, num2){ 
	//validação, caso o usuário não digite valores
	if (!num1 || !num2) return' Defina dois números!';
	//Criado duas variáveis para chamar elas depois que criar as funções 
	const primeiraFrase = criaPrimeiraFrase(num1, num2);
	const segundaFrase = criarSegundaFrase(num1, num2);
	
	//Retornando valores apresentando nas funções criada
	return `${primeiraFrase} ${segundaFrase}`;
};

function criaPrimeiraFrase(num1, num2){
	let saoIguais = "";

	if (num1 !== num2) {
		saoIguais = "não";
 }
	return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
};

function criarSegundaFrase(num1, num2){
	const soma = num1 + num2;

	let resultado10 = 'menor';
	let resultado20 = 'maior';
	
	const comparar10 = soma > 10;
	const comparar20 = soma > 20;
	
	if (comparar10){
		resultado = 'menor' 
 }
	
	if (comparar20){
		resultado = 'maior' 
 }
	return ` sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20. `
}

//chamar a função e testando nos dois modo 
console.log(compraraNumeros(1, 2)); //chamando a função 
// console.log(compraraNumeros(20, 20));;//chamado a função 
