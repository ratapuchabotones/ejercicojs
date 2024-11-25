function ejemplo1() {
    var x = document.getElementById("eje1").value;
    var d = 0
    for (let n = 1; n <= x; n++){
        d = d + 1/n**2
    }
    document.write(d);
}
function ejemplo2() {
    var y = document.getElementById("eje2").value;
    var h = 0
    for (let r = 1; r <= y; r++){
        h = h + (r **2)/(2**r)
    }
    document.write(h);
}
function ejemplo3() {
    var z = document.getElementById("comp3").value;
    var w = document.getElementById("eje3").value;
    var c = 0
    var f = 1
    for (let s = 0; s <= w; s++){
        if (s > 1) {
           f = f * s 
        }
        c = c + (z **s)/(f)
    }
    document.write(c);
}