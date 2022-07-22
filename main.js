for (let y = 1; y <=9; y++){
    for(let x = 1; x <= 9; x++){
        if (x+y==10 && x>=5 && y<=5) {
            document.write("*")
        }else if(x==5 && y>5){
            document.write("*")
        }else if(x==y && y<5){
            document.write("*")
        }
        else {
            document.write("~") 
        }
    }
    document.write("<br>");
}

document.write("<br>")

for (let y = 1; y <=9; y++){
    for(let x = 1; x <= 9; x++){
        if (x==1 || y==1 || x==9 || y==5) {
            document.write("*")
        } else {
            document.write("~") 
        }
    }
    document.write("<br>");
}

document.write("<br>")
for (let y = 1; y <=9; y++){
    for(let x = 1; x <= 9; x++){
        if (x==1 || y==1 || y==5) {
            document.write("*")
        } else {
            document.write("~") 
        }
    }
    document.write("<br>");
}

document.write("<br>")
document.write("<br>")
for (let y = 1; y <=9; y++){
    for(let x = 1; x <= 9; x++){
        if (x==5 || y==1 || y==9) {
            document.write("*")
        } else {
            document.write("~") 
        }
    }
    document.write("<br>");
}

document.write("<br>")