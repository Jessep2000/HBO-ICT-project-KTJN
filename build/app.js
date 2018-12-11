class Bus {
}
class Canvas {
    constructor(canvasId) {
        this.canvas = canvasId;
        this.canvas.width = 1280;
        this.canvas.height = 720;
        this.canvas.getContext("2d");
    }
    doSomething() {
        this.ctx.rect(50, 50, 50, 50);
        this.ctx.fillStyle = "red";
    }
}
class Entity {
}
class Game {
    constructor() {
        const canvasElement = document.getElementById("canvas");
        this._canvas = new Canvas(canvasElement);
    }
}
let init = function () {
    const Deliveration = new Game();
};
window.addEventListener("load", init);
class NPC extends Entity {
}
class KeyboardHelper {
}
//# sourceMappingURL=app.js.map