class Sound {
    constructor(scene, x, y) {
        this.clickButton = scene.add.text(x + 40, y - 15, "Balance the scales and figure out the toy's weight ", {
            font: "30px Arial",
            fill: "#000"
        });
        this.create(scene, x, y);
    }

    create(scene, x, y) {
        this.button = scene.add.image(x, y, 'sound')
            .setInteractive()
            .on('pointerover', () => this.enterButtonHoverState())
            .on('pointerout', () => this.enterButtonRestState())
            .on('pointerdown', () => this.enterButtonActiveState())
        this.sound = scene.sound.add('speak');
    }

    enterButtonHoverState() {
        this.button.setFrame(1);
    }

    enterButtonRestState() {
        this.button.setFrame(0);
    }

    enterButtonActiveState() {
        this.button.setFrame(1);
        this.on();
    }

    on() {
        this.sound.play();
    }
}