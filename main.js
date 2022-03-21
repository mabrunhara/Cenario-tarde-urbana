var c= document.getElementById("teste");
var ctx=c.getContext("2d");
	
	
	// Sol
	var grdLinear= ctx.createLinearGradient (20,40,0,900)
	grdLinear.addColorStop (0,"#f55d03");
	grdLinear.addColorStop (0.3,"#fea635");
	grdLinear.addColorStop (0.4,"#ff8d81");
	grdLinear.addColorStop (1,"#ff8d81");
	ctx.fillStyle = grdLinear;


	
	
	// Retângulo
	ctx.fillStyle= ("");
	ctx.beginPath();
	ctx.lineTo(1880,1880);
	ctx.lineTo(1880,40);
	ctx.lineTo(20,40);
	ctx.lineTo(20,1880);
	ctx.stroke();
	ctx.fill ();
	
	// Céu
	var grdLinear2= ctx.createLinearGradient (20,40,0,900)
	grdLinear2.addColorStop (0,"#8EB9DD");
	grdLinear2.addColorStop (0.3,"#d4b5a0");
	grdLinear2.addColorStop (0.4,"#f6a06f");
	grdLinear2.addColorStop (1,"#ff914d");
	ctx.fillStyle = grdLinear2;
	ctx.arc(950,460,200,0,2*3.14);
	//ctx.fillStyle = grdRadial;
	ctx.fill ();
	ctx.closePath();
	
	//Linha do horizonte
	ctx.strokeStyle = "black";
	ctx.lineWidth = 1;
	ctx.beginPath();
	ctx.moveTo (20,460);
	ctx.lineTo (1880,460);
	ctx.stroke();
	
     // Grama
	var grdLinearG= ctx.createLinearGradient (20,40,0,900)
	grdLinearG.addColorStop (0,"#C6F090");
	grdLinearG.addColorStop (0.5,"#ACD448");
	grdLinearG.addColorStop (0.6,"#8CAC3B");
	grdLinearG.addColorStop (1,"#3D5404");
	ctx.fillStyle = grdLinearG;
	ctx.beginPath();
	ctx.lineTo(1880,460);
	ctx.lineTo(600,460);
	ctx.lineTo(20,460);
	ctx.lineTo(1880,1000000);
	ctx.stroke();
	ctx.fill ();
	
	
	// Rua
	var grdLinearR= ctx.createLinearGradient (20,40,0,900)
	grdLinearR.addColorStop (0.4,"#D99C63");
	grdLinearR.addColorStop (0.6,"#946B44");
	grdLinearR.addColorStop (0.8,"#573F28");
	grdLinearR.addColorStop (1,"#332517");
	ctx.fillStyle = grdLinearR;
	ctx.beginPath ();
	ctx.lineWidth = 2;
	ctx.moveTo (1880,898);
	ctx.lineTo (1050,460);
	ctx.lineTo (850,460);
	ctx.lineTo (24,898);
	ctx.lineTo (1880,898);
	ctx.fill ();
	
	

	
	
	