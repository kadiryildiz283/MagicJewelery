import {sprite,addimage,map} from './loaders.js';
import CreateBackgroundElement,{AnimationFrame} from './CreateBackgroundElement.js';


map.get("star8")
.addEventListener('load',()=> {
	
	var accu=0;
	var lastTime=0;
	var deltatime=1/640;
	var lastTime=0;
	var player = {
  			pos:{x:2,
 				 y:-1}};

	var canvas = document.getElementById('canvas');
	var context = canvas.getContext("2d");

 	function drawLevel(level) {
		return function setlevel(currentLevel,currentlevelimg = "bg1") {
			if (level == currentLevel) {
				context.drawImage(map.get(currentlevelimg),0,0,canvas.width,canvas.height);	
			}
		}
	}
	var h = 0;


	var number1 = Math.floor(Math.random() * 6)+1;
	var number2 = Math.floor(Math.random() * 6)+1;
	var number3 = Math.floor(Math.random() * 6)+1;
	var puzzle=[[0,number1,0],
	[0,number2,0],
	[0,number3,0],
	]
	var puzzle1=[[0,number3,0],
	[0,number1,0],
	[0,number2,0],
	]
	var puzzle2=[[0,number2,0],
	[0,number3,0],
	[0,number1,0],
	]
	var matrixs = new Array();
	matrixs[0]=puzzle
	matrixs[1]=puzzle1
	matrixs[2]=puzzle2
	matrixs[3]=puzzle
	var controlPoint = 12;
	var score = 0;
	var scorediv= 0;

	function Matrix() {
		return function draw(matrix,h) {
		 matrix[h].forEach((item,i) =>{
		 	item.forEach((value,y)=> {
		 		if (value == 1) {
		 			context.drawImage(map.get("mavi"),130+y*39+player.pos.x*39-78,i*42+player.pos.y*44.2,39,42);	
		 		}
		 		if (value == 2) {
					context.drawImage(map.get("turuncu"),130+y*39+player.pos.x*39-78,i*42+player.pos.y*44.2,39,42);	
		 		}
		 		if (value == 3) {
					context.drawImage(map.get("turuncu2"),130+y*39+player.pos.x*39-78,i*42+player.pos.y*44.2,39,42);		
		 		}
		 		if (value == 4) {
					context.drawImage(map.get("kirmizi"),130+y*39+player.pos.x*39-78,i*42+player.pos.y*44.2,39,42);	
		 		}
		 		if (value == 5) {
					context.drawImage(map.get("mor"),130+y*39+player.pos.x*39-78,i*42+player.pos.y*44.2,39,42);		
		 		}
		 		if (value == 6) {
					context.drawImage(map.get("yesil"),130+y*39+player.pos.x*39-78,i*42+player.pos.y*44.2,39,42);	
		 		}
		 	})
		 });
		 		return function drawNextPiece(matrix2) {
					 matrix2.forEach((item,i) =>{
		 	item.forEach((value,y)=> {
		 		if (value == 1) {
		 			context.drawImage(map.get("mavi"),11+y*39,45+i*42,39,42);	
		 		}
		 		if (value == 2) {
		 			context.drawImage(map.get("turuncu"),11+y*39,45+i*42,39,42);	
		 		}
		 		if (value == 3) {
		 			context.drawImage(map.get("turuncu2"),11+y*39,45+i*42,39,42);	
		 		}
		 		if (value == 4) {
		 			context.drawImage(map.get("kirmizi"),11+y*39,45+i*42,39,42);	
		 		}
		 		if (value == 5) {
		 			context.drawImage(map.get("mor"),11+y*39,45+i*42,39,42);	
		 		}
		 		if (value == 6) {
		 			context.drawImage(map.get("yesil"),11+y*39,45+i*42,39,42);	
		 		}
		 	})
		 }); 
		 return function keepSpace() {
			matrixs[h].forEach((row, y) => {
		   row.forEach((value, x) => {
			 if (value!=0) {
		 alan[y+player.pos.y][x+player.pos.x] = value;
			 }
		   });
		 });
		}
		}
		}
	}

	 		var newMatrix = Matrix();
	 		var number1 = Math.floor(Math.random() * 6)+1;
			var number2 = Math.floor(Math.random() * 6)+1;
			var number3 = Math.floor(Math.random() * 6)+1;
			var matrix2 = new Array()
	 		    matrix2[0] = [[0,number1,0],
										[0,number2,0],
										[0,number3,0]]
										matrix2[1] = [[0,number3,0],
										[0,number1,0],
										[0,number2,0]]
										matrix2[2] = [[0,number2,0],
										[0,number3,0],
										[0,number1,0]]					

function pieces(w,b) {
  const matrix=[];
  while (b--) {
    matrix.push(new Array(w).fill(0))
  }
  return matrix}

var alan = pieces(15,25);
alan[15][2]=8
alan[15][3]=8
alan[15][4]=8
alan[15][5]=8
alan[15][6]=8
alan[15][7]=8

  function drawSpace() {
	alan.forEach((item, y) => {
	  item.forEach((value,x) => {
	if (value == 1) {
		context.drawImage(map.get("mavi"),x*39+52,y*44.2-45,39,42);
	}
	if (value == 2) {
		context.drawImage(map.get("turuncu"),x*39+52,y*44.2-45,39,42);
	}
	if (value == 3) {
		context.drawImage(map.get("turuncu2"),x*39+52,y*44.2-45,39,42);	
	}
	if (value == 4) {
		context.drawImage(map.get("kirmizi"),x*39+52,y*44.2-45,39,42);	
	}
	if (value == 5) {
		context.drawImage(map.get("mor"),x*39+52,y*44.2-45,39,42);	
	}
	if (value == 6) {
		context.drawImage(map.get("yesil"),x*39+52,y*44.2-45,39,42);	
	}
	if (value == 7) {
		context.drawImage(map.get("yesil"),x*39+52,y*44.2-45,39,42);	
	}
	  });
	});
  }

										
			var lastTime=0;
			var  dropcounter= 0;
			var limit = true;



			function kontrol1() {
  if (player.pos.x==1&&alan[14][2]!=0) {
	controlPoint =11
  } 	
  else if (player.pos.x==2&&alan[14][3]!=0) {
	controlPoint =11
  }
  else if (player.pos.x==3&&alan[14][4]!=0) {
	controlPoint =11
  }
  else if (player.pos.x==4&&alan[14][5]!=0) {
	controlPoint =11
  }
  else if (player.pos.x==5&&alan[14][6]!=0) {
	controlPoint =11
  }
  else if (player.pos.x==6&&alan[14][7]!=0) {
	controlPoint =11
  }
  else {
    controlPoint=12
  }
}
function kontrol2() {
   if (player.pos.x==1&&alan[13][2]!=0) {
	controlPoint =10
  }
  if (player.pos.x==2&&alan[13][3]!=0) {
	controlPoint =10
  }
  if (player.pos.x==3&&alan[13][4]!=0) {
	controlPoint =10
  }
  if (player.pos.x==4&&alan[13][5]!=0) {
	controlPoint =10
  }
  if (player.pos.x==5&&alan[13][6]!=0) {
	controlPoint =10
  }
  if (player.pos.x==6&&alan[13][7]!=0) {
	controlPoint =10
  }

  if (player.pos.x==1&&alan[12][2]!=0) {
	controlPoint =9
  }
  if (player.pos.x==2&&alan[12][3]!=0) {
	controlPoint =9
  }
  if (player.pos.x==3&&alan[12][4]!=0) {
	controlPoint =9
  }
  if (player.pos.x==4&&alan[12][5]!=0) {
	controlPoint =9
  }
  if (player.pos.x==5&&alan[12][6]!=0) {
	controlPoint =9
  }
  if (player.pos.x==6&&alan[12][7]!=0) {
	controlPoint =9
  }

  if (player.pos.x==1&&alan[11][2]!=0) {
	controlPoint =8
  }
  if (player.pos.x==2&&alan[11][3]!=0) {
	controlPoint =8
  }
  if (player.pos.x==3&&alan[11][4]!=0) {
	controlPoint =8
  }
  if (player.pos.x==4&&alan[11][5]!=0) {
	controlPoint =8
  }
  if (player.pos.x==5&&alan[11][6]!=0) {
	controlPoint =8
  }
  if (player.pos.x==6&&alan[11][7]!=0) {
	controlPoint =8
  }
  
  if (player.pos.x==1&&alan[10][2]!=0) {
	controlPoint =7
  }
  if (player.pos.x==2&&alan[10][3]!=0) {
	controlPoint =7
  }
  if (player.pos.x==3&&alan[10][4]!=0) {
	controlPoint =7
  }
  if (player.pos.x==4&&alan[10][5]!=0) {
	controlPoint =7
  }
  if (player.pos.x==5&&alan[10][6]!=0) {
	controlPoint =7
  }
  if (player.pos.x==6&&alan[10][7]!=0) {
	controlPoint =7
  }


  if (player.pos.x==1&&alan[9][2]!=0) {
	controlPoint =6
  }
  if (player.pos.x==2&&alan[9][3]!=0) {
	controlPoint =6
  }
  if (player.pos.x==3&&alan[9][4]!=0) {
	controlPoint =6
  }
  if (player.pos.x==4&&alan[9][5]!=0) {
	controlPoint =6
  }
  if (player.pos.x==5&&alan[9][6]!=0) {
	controlPoint =6
  }
  if (player.pos.x==6&&alan[9][7]!=0) {
	controlPoint =6
  }


  if (player.pos.x==1&&alan[8][2]!=0) {
	controlPoint =5
  }
  if (player.pos.x==2&&alan[8][3]!=0) {
	controlPoint =5
  }
  if (player.pos.x==3&&alan[8][4]!=0) {
	controlPoint =5
  }
  if (player.pos.x==4&&alan[8][5]!=0) {
	controlPoint =5
  }
  if (player.pos.x==5&&alan[8][6]!=0) {
	controlPoint =5
  }
  if (player.pos.x==6&&alan[8][7]!=0) {
	controlPoint =5
  }


  if (player.pos.x==1&&alan[7][2]!=0) {
	controlPoint =4
  }
  if (player.pos.x==2&&alan[7][3]!=0) {
	controlPoint =4
  }
  if (player.pos.x==3&&alan[7][4]!=0) {
	controlPoint =4
  }
  if (player.pos.x==4&&alan[7][5]!=0) {
	controlPoint =4
  }
  if (player.pos.x==5&&alan[7][6]!=0) {
	controlPoint =4
  }
  if (player.pos.x==6&&alan[7][7]!=0) {
	controlPoint =4
  }


  if (player.pos.x==1&&alan[6][2]!=0) {
	controlPoint =3
  }
  if (player.pos.x==2&&alan[6][3]!=0) {
	controlPoint =3
  }
  if (player.pos.x==3&&alan[6][4]!=0) {
	controlPoint =3
  }
  if (player.pos.x==4&&alan[6][5]!=0) {
	controlPoint =3
  }
  if (player.pos.x==5&&alan[6][6]!=0) {
	controlPoint =3
  }
  if (player.pos.x==6&&alan[6][7]!=0) {
	controlPoint =3
  }


  
  if (player.pos.x==1&&alan[5][2]!=0) {
	controlPoint =2
  }
  if (player.pos.x==2&&alan[5][3]!=0) {
	controlPoint =2
  }
  if (player.pos.x==3&&alan[5][4]!=0) {
	controlPoint =2
  }
  if (player.pos.x==4&&alan[5][5]!=0) {
	controlPoint =2
  }
  if (player.pos.x==5&&alan[5][6]!=0) {
	controlPoint =2
  }
  if (player.pos.x==6&&alan[5][7]!=0) {
	controlPoint =2
  }
  if (player.pos.x==1&&alan[5][2]!=0) {
	controlPoint =2
  }
  if (player.pos.x==2&&alan[5][3]!=0) {
	controlPoint =2
  }
  if (player.pos.x==3&&alan[5][4]!=0) {
	controlPoint =2
  }
  if (player.pos.x==4&&alan[5][5]!=0) {
	controlPoint =2
  }
  if (player.pos.x==5&&alan[5][6]!=0) {
	controlPoint =2
  }
  if (player.pos.x==6&&alan[5][7]!=0) {
	controlPoint =2
  }


}


function skor() {
	function dortlu() {
	  for (let y = 14; y > 0; --y) {
		for (let i = 2; i < 8; i++) {
			  if (alan[y][i]===alan[y+1][i]&&alan[y][i]!=7&&alan[y][i]===alan[y+2][i]&&alan[y][i]===alan[y+3][i]&&alan[y][i]!=0&&alan[y-1][i]===0) {
				alan[y+1][i]=0
				alan[y+2][i]=0
				alan[y+3][i]=0
				alan[y][i]=0
				score= score+4
				scorediv=scorediv+4
			  }
		   if ((alan[y][i]===alan[y+1][i])&&(alan[y][i]===alan[y+2][i])&&(alan[y][i]===alan[y+3][i])&&(alan[y][i]!=0&&alan[y][i]!=7)) {
			alan[y+3][i]=alan[y-1][i]
			alan[y-1][i]=0
			alan[y-2][i]=0
			alan[y+1][i]=0
			alan[y+2][i]=0
			alan[y][i]=0
			score= score+4
			scorediv=scorediv+4
		  }
	}
	}
	}
	function uclu() {
	  for (let y = 14; y > 0; --y) {
		for (let i = 2; i < 8; i++) {
	
	   if (alan[y][i]===alan[y+1][i]&&alan[y][i]===alan[y+2][i]&&alan[y][i]!=0&&alan[y][i]!=7) {
			alan[y+2][i]=alan[y-1][i]
			alan[y+1][i]=alan[y-2][i]
			alan[y-1][i]=0
			alan[y-2][i]=0
			alan[y-3][i]=0
			alan[y][i]=0
			score= score+3
			scorediv=scorediv+3
	
		  }
			}
			  }
	}
	function besli() {
	  for (let y = 14; y > 0; --y) {
		for (let i = 2; i < 2; i++) {
		  if (alan[y][i]===alan[y+1][i]&&alan[y][i]===alan[y+2][i]&&alan[y][i]===alan[y+3][i]
			&&alan[y][i]===alan[y-1][i]&&alan[y][i]!=0&&alan[y][i]!=7) {
			  alan[y+1][i]=0
			  alan[y+2][i]=0
			  alan[y+3][i]=0
			  alan[y-1][i]=0
			  alan[y][i]=0
			  score= score+5
			  scorediv=scorediv+5
			  }
		}
			}
	}
	function carpraz() {
	  for (let y = 14; y > 0; --y) {
		for (let i = 2; i < 8; i++) {
		   if (alan[y][i]===alan[y+1][i+1]&&alan[y][i]===alan[y+2][i+2]&&alan[y][i]!=0&&alan[y][i]!=7) {
			alan[y][i]=0
			alan[y+1][i+1]=0
			alan[y+2][i+2]=0
			score= score+3
			scorediv=scorediv+3
		  }
		  else if (alan[y][i]===alan[y+1][i-1]&&alan[y][i]===alan[y+2][i-2]&&alan[y][i]!=0&&alan[y][i]!=7) {
			alan[y][i]=0
			alan[y+1][i-1]=0
			alan[y+2][i-2]=0
			score= score+3
			scorediv=scorediv+3
			 }
			}
			  }
	  }
	  function kontrol3() {
		for (let y = 14; y > 7; --y) {
		  for (let i = 2; i < 8; i++) {
			if ((alan[y][i]===0&&alan[y-1][i]!=0&&alan[y+1][i]!=0)||(alan[y][i]===0&&
			alan[y-1][i]===0&&alan[y+1][i]!=0&&alan[y][i]!=7)) {
			  alan[y][i]=alan[y-1][i]
			  alan[y-1][i]=alan[y-2][i]
			  alan[y-2][i]=alan[y-3][i]
			  alan[y-3][i]=alan[y-4][i]
			  alan[y-4][i]=alan[y-5][i]
			  alan[y-5][i]=alan[y-6][i]
			  alan[y-6][i]=alan[y-7][i]
			}
			  }
				}
				  }
	function yan() {
	  for (let y = 14; y > 0; --y) {
		for (let i = 2; i < 6; i++) {
			if (alan[y][i]===alan[y][i+1]&&alan[y][i]===alan[y][i+2]&&alan[y][i]!=0&&alan[y][i]!=8&&alan[y][i]!=7)
			{
			  alan[y][i]=0
			  alan[y][i+1]=0
			  alan[y][i+2]=0
			  score= score+3
			  scorediv=scorediv+3
			}
	
	
	}
	}
	}
	function yandortlu() {
	  for (let y = 14; y > 0; --y) {
		for (let i = 2; i < 8; i++) {
			if (alan[y][i]===alan[y][i+1]&&alan[y][i]===alan[y][i+2]&&alan[y][i]!=0&&alan[y][i]!=8&&
	alan[y][i]===alan[y][i+3]&&alan[y][i]!=7)
			{
			  alan[y][i]=0
			  alan[y][i+1]=0
			  alan[y][i+2]=0
			  alan[y][i+3]=0
			  score= score+4
			  scorediv=scorediv+4
			}
	}
	}
	}

	function carprazdortlu() {
	  for (let y = 14; y > 0; --y) {
		for (let i = 2; i < 8; i++) {
		   if (alan[y][i]===alan[y+1][i+1]&&alan[y][i]===alan[y+2][i+2]&&alan[y][i]!=0&&
		   alan[y][i]===alan[y+3][i+3]&&alan[y][i]!=7) {
			alan[y][i]=0
			alan[y+1][i+1]=0
			alan[y+2][i+2]=0
			alan[y+3][i+3]=0
			score= score+4
			scorediv=scorediv+4
		  }
		  else if (alan[y][i]===alan[y+1][i-1]&&alan[y][i]===alan[y+2][i-2]&&alan[y][i]!=0&&
		  alan[y][i]===alan[y+3][i-3]&&alan[y][i]!=7) {
			alan[y][i]=0
			alan[y+1][i-1]=0
			alan[y+2][i-2]=0
			alan[y+3][i-3]=0
			score= score+4
			scorediv=scorediv+4
			 }
			}
			  }
	  }
	  function carprazbesli() {
		for (let y = 14; y > 0; --y) {
		  for (let i = 2; i < 8; i++) {
			 if (alan[y][i]===alan[y+1][i+1]&&alan[y][i]===alan[y+2][i+2]&&alan[y][i]!=0&&
			 alan[y][i]===alan[y+3][i+3]&&alan[y][i]===alan[y+4][i+4]&&alan[y][i]!=7) {
			  alan[y][i]=0
			  alan[y+1][i+1]=0
			  alan[y+2][i+2]=0
			  alan[y+3][i+3]=0
			  alan[y+4][i+4]=0
			  score= score+5
			  scorediv=scorediv+5
			}
			else if (alan[y][i]===alan[y+1][i-1]&&alan[y][i]===alan[y+2][i-2]&&alan[y][i]!=0&&
			alan[y][i]===alan[y+3][i-3]&&alan[y][i]===alan[y+4][i-4]&&alan[y][i]!=7) {
			  alan[y][i]=0
			  alan[y+1][i-1]=0
			  alan[y+2][i-2]=0
			  alan[y+3][i-3]=0
			  alan[y+4][i-4]=0
			  score= score+5
			  scorediv=scorediv+5
			   }
			  }
				}
	
		}
		function yanbesli() {
		  for (let y = 14; y > 0; --y) {
			for (let i = 2; i < 8; i++) {
				if (alan[y][i]===alan[y][i+1]&&alan[y][i]===alan[y][i+2]&&alan[y][i]!=0&&alan[y][i]!=8&&
		alan[y][i]===alan[y][i+3]&&alan[y][i]===alan[y][i+4]&&alan[y][i]!=7)
				{
				  alan[y][i]=0
				  alan[y][i+1]=0
				  alan[y][i+2]=0
				  alan[y][i+3]=0
				  alan[y][i+4]=0
				  score= score+5
				  scorediv=scorediv+5
				}
	
	
		}
		}
		}
				  carprazbesli();
				  yanbesli();
				  carprazdortlu();
				  yandortlu();
				  carpraz();
				  besli();
				  dortlu();
				  uclu();
				  yan();
				  kontrol3();
				  }


			
      function update(time = 0) {
        accu = (time- lastTime)/1000
        while(accu>deltatime){
		const deltatime2= time- lastTime
		lastTime=time
		dropcounter+=deltatime2
        accu -= time;
        context.fillStyle = '#000';
        context.fillRect(0, 0, canvas.width, canvas.height);
		if ((dropcounter>500)&&limit) {
			player.pos.y++
			dropcounter=0
			if (player.pos.y ==controlPoint) {
				newMatrix(matrixs,h)(matrix2[0])();				
				player.pos.y =-1;
				drawSpace();	
				matrixs[0]= matrix2[0]
				matrixs[1]= matrix2[1]
				matrixs[2]= matrix2[2]

				var number1 = Math.floor(Math.random() * 6)+1;
				var number2 = Math.floor(Math.random() * 6)+1;
				var number3 = Math.floor(Math.random() * 6)+1;

				matrix2[0] = [[0,number1,0],
				[0,number2,0],
				[0,number3,0]]
				matrix2[1] = [[0,number3,0],
				[0,number1,0],
				[0,number2,0]]
				matrix2[2] = [[0,number2,0],
				[0,number3,0],
				[0,number1,0]]
			}
		}
        AnimationFrame();
        drawLevel(1)(1);
        newMatrix(matrixs,h)(matrix2[0]);
		drawSpace();
		kontrol1();
		kontrol2();
		skor();
        }
        requestAnimationFrame(update);
        }
        update();
var sonzaman =0;
var dropct =0;
var ka=14
var ba=7;


		function updeta(xx=0) {
			const gecenzaman= xx- sonzaman
			sonzaman=xx
			dropct+=gecenzaman
		  if (controlPoint==2) {
			if (ka>0) {
			if (dropct>25) {
			  dropct=1
			  alan[ka][ba]=7
			  ba=ba-1
			  if (ba==2) {
				dropct=0
			  alan[ka][ba]=7
			  ba=7
				ka=ka-1
			  }
			}
		  }
			}
		  requestAnimationFrame(updeta);
		  }
		  updeta();

        document.addEventListener("keydown", () =>{

			if (event.keyCode===37) {
				if (player.pos.x==1) {
				  return player.pos.x==1
				}
				if (player.pos.x==2&&alan[player.pos.y+3][2]!=0) {
				  return player.pos.x==2}
				if (player.pos.x==3&&alan[player.pos.y+3][3]!=0) {
				  return player.pos.x==3}
				if (player.pos.x==4&&alan[player.pos.y+3][4]!=0) {
				  return player.pos.x==4}
				if (player.pos.x==5&&alan[player.pos.y+3][5]!=0) {
				  return player.pos.x==5}
				if (player.pos.x==6&&alan[player.pos.y+3][6]!=0) {
				  return player.pos.x==6} 
				player.pos.x--}

if (event.keyCode==38) {
	if (h==2) {
		h=0
	}
	else{h++}
}
if (event.keyCode===39) {
	if (player.pos.x==6) {
	  return player.pos.x==1
	}
	if (player.pos.x==1&&alan[player.pos.y+3][3]!=0) {
	  return player.pos.x==1}
	if (player.pos.x==2&&alan[player.pos.y+3][4]!=0) {
	  return player.pos.x==2}
	if (player.pos.x==3&&alan[player.pos.y+3][5]!=0) {
	  return player.pos.x==3}
	if (player.pos.x==4&&alan[player.pos.y+3][6]!=0) {
	  return player.pos.x==4}
	if (player.pos.x==5&&alan[player.pos.y+3][7]!=0) {
		return player.pos.x==5}
	player.pos.x++}
	if (event.keyCode==40) {
		if (player.pos.y!=controlPoint-1) {
			dropcounter =0;
			player.pos.y+=1;
		}
	}
});
  });