let HE = Number(prompt("Digite a hora de entrada:"));
let ME = Number(prompt("Digite os minutos de entrada:"));
let HS = Number(prompt("Digite a hora de saída:"));
let MS = Number(prompt("Digite os minutos de saída:"));
let entrada = HE *60 + ME;
let saida= HS *60 + MS;
let tempo = saida - entrada; 
let vl = 0;

if(tempo <= 60){
	vl = 4;
}
else if(tempo <=120){
	vl = 6;
}
else{
	vl = 6 + Math.floor((tempo-120)/60);
	if(tempo%60 != 0 ){
		vl ++;
	}
}

document.getElementById("resultado").textContent = `Valor a pagar: R$ ${vl.toFixed(2)}`;

