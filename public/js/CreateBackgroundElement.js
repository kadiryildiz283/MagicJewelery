import {map} from './loaders.js';

var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");

export default class CreateBackgroundElement {
		constructor(x,y,object){
			this.set(x,y)
			this.object = object;
		}
		set(x,y){
			this.x = x;
			this.y = y;
		}
	}
export function	CreateAnimationElement(object1 , object2 , x , y , offset = -32 , limit = 1280){
  				if (object1.y >= limit) {
  					  object1.set(x,y);
  				}
  				
  				if (object2.y >= limit) {
  					  object2.set(x,y);
  				}
  				return function draw(name,w,h) {
  					context.drawImage(map.get(name),x,offset+object1.y,w,h);
  					context.drawImage(map.get(name),x,offset+object2.y,w,h); 
  							return function setSpeed(speed) {
  					 			object1.y+=speed
  								object2.y+=speed 	
  								}			
 		 					}
 					}
  var moon1 = new CreateBackgroundElement(500,-672,"moon");
  var moon2 = new CreateBackgroundElement(500,-32,"moon");
  var star1 = new CreateBackgroundElement(585,32,"star1");
  var star2 = new CreateBackgroundElement(560,-15,"star2");
  var star3 = new CreateBackgroundElement(620, 90,"star3");
  var star4 = new CreateBackgroundElement(610, 290,"star4");
  var star5 = new CreateBackgroundElement(512,65,"star5");
  var star6 = new CreateBackgroundElement(560,-2,"star6");
  var star7 = new CreateBackgroundElement(620, 124,"star7");
  var star8 = new CreateBackgroundElement(610, 47,"star8");

 var backgorundimages = [];
 backgorundimages.push(moon1,moon2,star1,star2,star3,star4,star5,star6,star7,star8);

 export function AnimationFrame() {
    CreateAnimationElement(backgorundimages[0],backgorundimages[1],585,0)("moon",32,32)(0.1);
    CreateAnimationElement(backgorundimages[2],backgorundimages[2],560,0)("star1",5,5)(0.01);
		CreateAnimationElement(backgorundimages[3],backgorundimages[3],550,0)("star2",5,5)(0.5);
		CreateAnimationElement(backgorundimages[4],backgorundimages[4],450,0)("star3",5,5)(0.2);
		CreateAnimationElement(backgorundimages[5],backgorundimages[5],600,0)("star4",5,5)(0.3);
		CreateAnimationElement(backgorundimages[6],backgorundimages[6],100,0)("star5",5,5)(0.01);
		CreateAnimationElement(backgorundimages[7],backgorundimages[7],457,0)("star6",5,5)(0.5);
		CreateAnimationElement(backgorundimages[8],backgorundimages[8],100,0)("star7",5,5)(0.2);
		CreateAnimationElement(backgorundimages[9],backgorundimages[9],601,0)("star8",5,5)(0.3);
 }

