Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

tyletypes = ['grass', 'water', 'sand']; 
map = [];
uSlectedType = "none";

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
            elem += "<div onclick='changeType(event, "+i+","+j+")' class='tile "+ map[i][j].type +"' id='"+i+","+j+"'></div>";
        };
        elem +="</div>"
    };
    return elem;
};

function getType (type){
    uSlectedType = type;
    console.log(type, " is slected")
};

function changeType (e, x, y){
    map[x][y].type = uSlectedType;
    console.log(""+x+""+y+"");
    e.target.className = "tile "+uSlectedType+"";

};
function download() {
  var a = document.getElementById("Dl");
  var file = new Blob([JSON.stringify(map)], {type: "text/plain"});
  a.href = URL.createObjectURL(file);
  a.download = "map";
}


genGinaricMap(10,10);
console.log(map, map[0][0], map[0][0].type);
document.getElementById('map').innerHTML += startMapHTML(map);
