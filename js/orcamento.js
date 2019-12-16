$("#desconto,#preco,#preco1,#total").mask("R$000,00");
function validarCampos(){
	var cliente = document.getElementById("clientenome").value;
	var produto = document.getElementById("produto").value;
	var qtd = document.getElementById("qtd").value;
	var msg = "";
	if (cliente=="0"){
		msg = msg + "Cliente\n";
	}
	if (produto=="0" && qtd==0){
		msg = msg + "Pelo menos um produto";
	}
	if (msg!=""){
		alert("Por favor, preencha corretamente os campos: \n"+msg);
		return false;
	}else {
		alert("Cadastro efetuado com sucesso!");
	}
}