$(document).ready(function() {

	var qdeTopos = 6;
	var numeroAleatorio = Math.floor((Math.random() * qdeTopos) + 1); /* pega um número aleatório de 1 a 2 */
	
	$('#topo img').hide();	// todas as imagens dentro do #topo esconde
	$('#topo' + numeroAleatorio).toggle(); // poe um topo aleatorio (numero) para visualização 'Visivel'	
	
});
