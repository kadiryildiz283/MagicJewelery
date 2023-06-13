export var sprite = [];

export function addimage(image){
	let file = new Image();
	file.src = image;
		return function SelectArray(array){
			array.push(file);
			return file;
	}

}
addimage('./img/bg1.png')(sprite);
addimage('./img/moon.png')(sprite);
addimage('./img/star1.png')(sprite);
addimage('./img/star2.png')(sprite);
addimage('./img/star3.png')(sprite);
addimage('./img/star4.png')(sprite);
addimage('./img/star1.png')(sprite);
addimage('./img/star2.png')(sprite);
addimage('./img/star3.png')(sprite);
addimage('./img/star4.png')(sprite);
addimage('./img/mavi.png')(sprite);
addimage('./img/turuncu.png')(sprite);
addimage('./img/turuncu2.png')(sprite);
addimage('./img/yesil.png')(sprite);
addimage('./img/mor.png')(sprite);
addimage('./img/kırmızı.png')(sprite);

export let map = new Map();
map.set('bg1', sprite[0]); 
map.set("moon", sprite[1]);
map.set("star1", sprite[2]);
map.set("star2", sprite[3]);
map.set("star3", sprite[4]);
map.set("star4", sprite[5]);
map.set("star5", sprite[6]);
map.set("star6", sprite[7]);
map.set("star7", sprite[8]);
map.set("star8", sprite[9]);
map.set("mavi", sprite[10]);
map.set("turuncu", sprite[11]);
map.set("turuncu2", sprite[12]);
map.set("yesil", sprite[13]);
map.set("mor", sprite[14]);
map.set("kirmizi", sprite[15]);

