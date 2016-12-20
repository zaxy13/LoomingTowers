Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

tyletypes = ['grass', 'water', 'genaric']; 
map = [];

function tile(type){
    this.type = type;
};
 
function genGinaricMap (xSize, ySize) {
     for(var i = 0; i <= xSize-1; i++){
         map.push([]);
         for(var j = 0; j <= ySize-1; j++){
             map[i].push(new tile(tyletypes.random()));
         }
         
     }
 }
function startMapHTML (map){
    elem = "";
    for(var i = 0; i <= map.length-1; i++){
        elem += "<div class='row' id='"+"row_"+i+"'>";
        for(var j = 0; j <= map[i].length-1; j++){
            elem += "<div class='tile "+ map[i][j].type +"' id='"+"col_"+(j)+"'></div>";
        };
        elem +="</div>"
    };
    return elem;
};


genGinaricMap(10,10);
console.log(map, map[0][0], map[0][0].type);
document.getElementById('map').innerHTML += startMapHTML(map);
