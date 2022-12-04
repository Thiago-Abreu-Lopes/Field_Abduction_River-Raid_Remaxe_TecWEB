///Mapas

/*Caminho reto*/
const mapa01 = [
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 2, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 3, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 2, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 3, 0, 2, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1]
];

/*Caminho à direita*/
const mapa02 = [
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 3, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 2, 0, 0, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 2, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]
];

/*Caminho à esquerda*/
const mapa03 = [
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 2, 0, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [0, 0, 3, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1]
];

/*Caminho à esquerda*/
const mapa04 = [
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 2, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1],
    [1, 0, 2, 0, 1, 1, 1, 1, 0, 3, 0, 1],
    [1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
];

/*Caminho zigzag*/
const mapa05 = [
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1]
];

//OBJETOS
const gameFlow = {
    canvas: document.querySelector('canvas'),
    intervaloMovimento: 25,
    getContexto() {
        const contexto = gameFlow.canvas.getContext('2d');
        return contexto;
    },
    getCanvasLargura() {
        const canvasLargura = gameFlow.canvas.width;
        return canvasLargura;
    },
    getCanvasAltura() {
        const canvasAltura = gameFlow.canvas.height;
        return canvasAltura;
    },
    fundo() {
        gameFlow.getContexto().fillStyle = '#61c74a';
        gameFlow.getContexto().fillRect(0, 0, gameFlow.getCanvasLargura(), gameFlow.getCanvasAltura());
    }
}

const player = {
    getImage() {
        const nave = new Image();
        nave.src = './imgs/nave 4.png';
        return nave;
    },
    spriteX: 0,
    spriteY: 0,
    largura: 21,
    altura: 12,
    x: (gameFlow.getCanvasLargura() / 2),
    y: (gameFlow.getCanvasAltura() - 22),
    vel: 0.05,
    capturas: 0,
    gasLevel: 100,
    atualiza(e) {
        if (e.keyCode == "39") {
            player.x += 7;
            console.log("seta para direita");

        } else if (e.keyCode == "37") {
            player.x -= 7;
            console.log("seta para esquerda");
        }
        gameFlow.getContexto().stroke();
        player.desenhar();
    },
    desenhar() {
        gameFlow.getContexto().drawImage(
            player.getImage(),
            player.spriteX, player.spriteY,
            player.largura, player.altura,
            player.x, player.y,
            player.largura, player.altura
        );
    },
    reseta() {
        player.x = (gameFlow.getCanvasLargura() / 2);
        player.y = (gameFlow.getCanvasAltura() - 22);
        cenario.posisitionMapaAtual = 0;
        carga.zerar();
        combustivel.aumentarCombustivel();
    }
}

const combustivel = {
    getImage() {
        const uranio = new Image();
        uranio.src = './imgs/uranio4.png';
        return uranio;
    },
    spriteX: 0,
    spriteY: 0,
    largura: 21,
    altura: 21,
    x: 0,
    y: 0,
    desenhar(x, y) {
        gameFlow.getContexto().drawImage(
            combustivel.getImage(),
            combustivel.spriteX, combustivel.spriteY,
            combustivel.largura, combustivel.altura,
            x, y,
            combustivel.largura, combustivel.altura
        );
    },
    reduzCombustivel() {
        const gasLevel = document.getElementById("gasLevel");
        const numberGas = document.getElementById("numberGas");
        gasLevel.value -= 0.05;
        if (gasLevel.value == 0) {
            player.reseta();
        }
        numberGas.innerHTML = Math.floor(gasLevel.value);
    },
    aumentarCombustivel() {
        const gasLevel = document.getElementById("gasLevel");
        const numberGas = document.getElementById("numberGas");
        gasLevel.value = 100;
        numberGas.innerHTML = gasLevel.value;

    },
    colisao(x, y) {
        var jxi = player.x;
        var jxf = jxi + player.largura;
        var jyi = player.y;
        var jyf = jyi + player.altura;
        var mxi = x;
        var mxf = mxi + combustivel.largura;
        var myi = y;
        var myf = myi + combustivel.altura;
        var verifica = jxf < mxi || jxi > mxf || jyf < myi || jyi > myf;
        if (!verifica) {
            return true;
        }
        return false;
    },
    sumir(x, y) {
        gameFlow.getContexto().clearRect(x, y, combustivel.largura, combustivel.altura);
        gameFlow.getContexto().fillStyle = "#61c74a";
        gameFlow.getContexto().fillRect(x, y, combustivel.largura, combustivel.altura);
    }
}

const carga = {
    getImage() {
        const vaca = new Image();
        vaca.src = './imgs/vaca4.png';
        return vaca;
    },
    spriteX: 0,
    spriteY: 0,
    largura: 21,
    altura: 13,
    x: 0,
    y: 0,
    desenhar(x, y) {
        gameFlow.getContexto().drawImage(
            carga.getImage(),
            carga.spriteX, carga.spriteY,
            carga.largura, carga.altura,
            x, y,
            carga.largura, carga.altura
        );
    },
    colisao(x, y) {
        var jxi = player.x;
        var jxf = jxi + player.largura;
        var jyi = player.y;
        var jyf = jyi + player.altura;
        var mxi = x;
        var mxf = mxi + carga.largura;
        var myi = y;
        var myf = myi + carga.altura;
        var verifica = jxf < mxi || jxi > mxf || jyf < myi || jyi > myf;
        if (!verifica) {
            return true;
        }
        return false;
    },
    sumir(x, y) {
        gameFlow.getContexto().clearRect(x, y, carga.largura, carga.altura);
        gameFlow.getContexto().fillStyle = "#61c74a";
        gameFlow.getContexto().fillRect(x, y, carga.largura, carga.altura);
    },
    aumentarCarga() {

        const cowLevel = document.getElementById("numberCow");
        player.capturas += 1;
        cowLevel.innerHTML = player.capturas;

    },
    zerar() {
        const cowLevel = document.getElementById("numberCow");
        player.capturas = 0;
        cowLevel.innerHTML = player.capturas;
    }
}

const cenario = {
    todosMapas: [mapa01, mapa02, mapa03, mapa04, mapa05],
    listaMapas: [mapa01],
    totalLinhas: mapa01.length,
    mapaAtual: 0,
    posisitionMapaAtual: 0,
    linhas: gameFlow.getCanvasAltura() / 10,
    colunas: gameFlow.getCanvasLargura() / 12,
    livre: 0,
    barreira: 1,
    vaquinha: 2,
    energia: 3,
    linhasPorTela() {
        return Math.floor(gameFlow.getCanvasAltura() / cenario.colunas);
    },

    colocarMapa() {
        var n = Math.floor(Math.random() * cenario.todosMapas.length);
        var next = cenario.todosMapas[n];
        cenario.listaMapas.push(next);
    },
    matrizParaPixelX(mx) {
        return Math.floor(mx * cenario.colunas);
    },
    matrizParaPixelY(my, dif) {
        var x = 0;
        if (dif) {
            x = cenario.posisitionMapaAtual - Math.floor(cenario.posisitionMapaAtual);
        }
        return ((cenario.linhas - 1) - my) * cenario.colunas + x * cenario.colunas;
    },
    posicaoNoMapa(x, y) {
        var mapa = Math.floor((cenario.posisitionMapaAtual + y) / cenario.totalLinhas);
        var resto = Math.floor(cenario.posisitionMapaAtual + y) % cenario.totalLinhas;
        if (mapa >= cenario.listaMapas.length) {
            cenario.colocarMapa();
        }
        return cenario.listaMapas[mapa][resto][x];
    },
    desenhar() {
        for (var yLinha = 0; yLinha < cenario.linhas; yLinha++) {
            for (var xColuna = 0; xColuna < cenario.colunas; xColuna++) {
                switch (cenario.posicaoNoMapa(xColuna, yLinha)) {
                    case cenario.barreira:
                        gameFlow.getContexto().fillStyle = "#b31b1b";
                        gameFlow.getContexto().fillRect(cenario.matrizParaPixelX(xColuna), cenario.matrizParaPixelY(yLinha, true), cenario.colunas, cenario.colunas);
                        if (cenario.colisaoPadrao(cenario.matrizParaPixelX(xColuna), cenario.matrizParaPixelY(yLinha, true))) {
                            player.reseta();
                        }
                        break;
                    case cenario.vaquinha:
                        carga.x = cenario.matrizParaPixelX(xColuna);
                        carga.y = cenario.matrizParaPixelY(yLinha, true);
                        carga.desenhar(carga.x, carga.y);
                        if (carga.colisao(carga.x, carga.y)) {
                            carga.aumentarCarga();
                            carga.sumir(carga.x, carga.y);
                        };
                        break;
                    case cenario.energia:
                        combustivel.x = cenario.matrizParaPixelX(xColuna);
                        combustivel.y = cenario.matrizParaPixelY(yLinha, true);
                        combustivel.desenhar(combustivel.x, combustivel.y);
                        if (combustivel.colisao(combustivel.x, combustivel.y)) {
                            combustivel.aumentarCombustivel();
                            combustivel.sumir(combustivel.x, combustivel.y);
                        };
                }
            }
        }
    },
    mover(vel) {
        cenario.posisitionMapaAtual += vel;
    },
    //COLISORES
    colisaoPadrao(x, y) {
        var jxi = player.x;
        var jxf = jxi + player.largura;
        var jyi = player.y;
        var jyf = jyi + player.altura;
        var mxi = x;
        var mxf = mxi + cenario.colunas;
        var myi = y;
        var myf = myi + cenario.colunas;
        var verifica = jxf < mxi || jxi > mxf || jyf < myi || jyi > myf;
        if (!verifica) {
            return true;
        }
        return false;
    },

    //ANIMADORES
    animacao() {
        combustivel.reduzCombustivel();
        cenario.mover(player.vel);
        cenario.desenhar();
    }
}

//Loop :)
function loop() {
    gameFlow.getContexto().clearRect(0, 0, gameFlow.getCanvasLargura(), gameFlow.getCanvasAltura());
    gameFlow.fundo();
    cenario.desenhar();
    setInterval(cenario.animacao(), gameFlow.intervaloMovimento);
    document.onkeydown = player.atualiza;
    //player.verificaCombustivel();
    player.desenhar();

    requestAnimationFrame(loop);

}
loop();
//console.log(player.capturas);