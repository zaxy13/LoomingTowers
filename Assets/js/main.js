map = [];

function tile(type, pos){
    this.type = type;
    this.pos = pos;
};
 
function genGinaricMap (xSize, ySize) {
     for(var i = 0; i <= xSize; i++){
         for(var j = 0; j <= ySize; j++){
             map.push(new tile('genaric',{"x":i,"y":j}));
         }
         
     }
 }

genGinaricMap(10,10);
console.log(map, map[0], map[0].pos);