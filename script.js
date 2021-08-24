const images = ["./img1.webp", "./img2.webp", "./img3.webp", "./img4.webp", "./img5.webp"]
let tamanhoDoArray = images.length -1
var contador = 0


function trocaDeImagem(){
    
    imagem1 = images[contador]
    imagem2 = images[contador+1]
    imagem3 = images[contador+2]

    console.log(contador)
    nextImage()
}

function nextImage() {
    document.getElementById("frente").src = [imagem1] 
    document.getElementById("meio").src = [imagem2]
    document.getElementById("tras").src = [imagem3]

}

function avancar() {
    if (contador === tamanhoDoArray){
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