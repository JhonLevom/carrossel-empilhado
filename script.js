var  img1 =  "./img1.webp"
var  img2 =  "./img2.webp"
var  img3 =  "./img3.webp"
var  img4 =  "./img4.webp"
var  img5 =  "./img5.webp"

const images = [img1, img2, img3, img4, img5]

var contador = 0


function trocaDeImagem(){
    
    if(contador === 0 ){
        imagem1 = images[0]
        imagem2 = images[1]
        imagem3 = images[2]
    }
    if(contador === 1){
        imagem1 = images[1]
        imagem2 = images[2]
        imagem3 = images[3]      
    }
    if(contador === 2){
        imagem1 = images[2]
        imagem2 = images[3] 
        imagem3 = images[4]         
    }
    if(contador === 3){
        imagem1 = images[3] 
        imagem2 = images[4] 
        imagem3 = images[5]        
    }
    if(contador === 4){
        imagem1 = images[4]
        imagem2 = images[5]
        imagem3 = images[5]       
    }
    console.log(contador)
    nextImage()
}

function nextImage() {
    document.getElementById("frente").src = [imagem1] 
    document.getElementById("meio").src = [imagem2]
    document.getElementById("tras").src = [imagem3]

}

function avancar() {

    if (contador === 4){
        console.log( "maximo" )
    }else{contador++
        trocaDeImagem()
    }
    
}

function retroceder() {

    if (contador === 0){

        console.log( "minimo" )

    }else{contador-- 
        trocaDeImagem()
    }

}