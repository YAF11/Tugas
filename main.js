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
            document.write("&ensp;") 
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
            document.write("&ensp;") 
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
            document.write("&ensp;") 
        }
    }
    document.write("<br>");
}

document.write("<br>")

for (let y = 1; y <=9; y++){
    for(let x = 1; x <= 9; x++){
        if (x==5 || y==1 || y==9) {
            document.write("*")
        } else {
            document.write("&ensp;") 
        }
    }
    document.write("<br>");
}

document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")

for (let y = 1; y <=9; y++){
    for(let x = 1; x <= 9; x++){
        if (x==5 || y==1 || y==9) {
            document.write("*")
        } else {
            document.write("&ensp;") 
        }
    }
    document.write("<br>");
}

document.write("<br>")

for (let y = 1; y<10; y++){
    for (let x = 1; x<10; x++){
         if(x==1 || x<8 && y==1 || x<8 && y==5 || x==y && x>5 && y>5){
             document.write("*")
        }else if (x==8 && y==2 || x==9 && y==3 || x==8 && y==4){
                document.write("*")
        }else {
       document.write("&ensp;")
    }
}
document.write("<br>");
}

document.write("<br>")

for (let y = 1; y<10; y++){
    for (let x = 1; x<10; x++){
        if(y<5 && x==1|| x==9 && y>5 || y==5 || y==9|| y==1 ){
            document.write("*")
        }else {
            document.write("&ensp;")
        }
    } document.write("<br>");
}

document.write("<br>")

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
            document.write("&ensp;") 
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
            document.write("&ensp;") 
        }
    }
    document.write("<br>");
}

document.write("<br>")

for (let y = 1; y<10; y++){
    for (let x = 1; x<10; x++){
         if(x==1 || y==1 && x<8 || y==9 && x<8 || y>2 && y<8 && x==9){
            document.write("*")
        }else if (x==8 && y==2 || x==8 && y==8){
            document.write("*")
        }else {
            document.write("&ensp;")
   }
}
document.write("<br>");
}
