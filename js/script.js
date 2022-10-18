function timSo(){
    var s = 0;
    var i = 1;
    while (s <= 10000) {
        s = s + i;
        i++ ;
    }
    document.getElementById("kqKetQua").innerHTML = `Số nguyên dương nhỏ nhất: ${i-1}`;
}
timSo();

function tinhTong(){
    var soX = document.getElementById("soX").value;
    var soN = document.getElementById("soN").value;
    soN = Number(soN);
    soX = Number(soX);

    var s = 0;
    for (var i = 1; i <= soN; i++) {    
        s = s + Math.pow(soX, i);
    }
    document.getElementById("kqTinhTong").innerHTML = s;
}

document.getElementById("tinhTong").onclick = tinhTong;

function tinhGiaiThua(){
    var so = document.getElementById("so").value;
    so = Number(so);
    var s = 1;
    for(var i = 1; i <= so; i++){
        s*=i;
    }
    document.getElementById("kqTinhGt").innerHTML = s;
}

document.getElementById("tinhGt").onclick = tinhGiaiThua;


function inDiv(){
    html = "";
    for(var i=1; i<=10; i++){
        if(i%2 == 0){
            html = html + `<div class='chan'>Div chẵn ${i}</div>`;
        }
        else{
            html = html + `<div class='le'>Div lẻ ${i}</div>`;
        }
    }
    document.getElementById("divCha").innerHTML = html;
}
document.getElementById("inDiv").onclick = inDiv;