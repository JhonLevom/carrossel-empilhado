var  img1 =  "./img1.webp"
var  img2 =  "./img2.webp"
var  img3 =  "./img3.webp"
var  img4 =  "./img4.webp"
var  img5 =  "./img5.webp"

var contador = 0


function trocaDeImagem(){
    
    if(contador === 0 ){
        imagem1 = img1
        imagem2 = img2
        imagem3 = img3
    }
    if(contador === 1){
        imagem1 = img2
        imagem2 = img3
        imagem3 = img4       
    }
    if(contador === 2){
        imagem1 = img3
        imagem2 = img4
        imagem3 = img5        
    }
    if(contador === 3){
        imagem1 = img4
        imagem2 = img5
        imagem3 = img1        
    }
    if(contador === 4){
        imagem1 = img5
        imagem2 = img1
        imagem3 = img2       
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