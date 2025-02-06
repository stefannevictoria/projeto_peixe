var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config)

var peixinho;

var musica;

function preload() {
    this.load.image('mar', 'assets/bg_azul-claro.png');
    this.load.image('logo', 'assets/logo-inteli_azul.png');
    this.load.image('peixe', 'assets/peixes/carpa.png');
    this.load.audio('musica', 'assets/musica.mp3');
} 

function create() {
    this.add.image(400, 300, 'mar');
    this.add.image(400, 525, 'logo').setScale(0.4);
    peixinho = this.add.image(400,300, 'peixe');
        peixinho.setOrigin(0.5,0.5);
        peixinho.setFlip(true,false);
        peixinho.setScale(0.7); 

    musica = this.sound.add('musica');
        musica.play();

        //adicionar texto na tela
    this.add.text(250, 50, 'Continue a nadar', {
        fontSize: '32px',
        color: '#000080',
        fontFamily: 'Gloria Hallelujah',
        fontStyle: 'bold italic'

    });
}

function update() {
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}

