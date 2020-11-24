import { Point } from './Point.js';

export class Wave {
    constructor() {

    }

    // 애니메이션을 그릴 때 가장 중요한 건 그리고자 하는 것의 좌표값을 가지고 와야한다.
    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.centerX = stageWidth / 2;
        this.centerY = stageHeight / 2;

        this.init();
    }

    init() {
        this.point = new Point(
            this.centerX,
            this.centerY
        );
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = "#ff0000";

        this.point.update();
        
        ctx.arc(this.point.x, this.point.y, 30, 0, 2 * Math.PI);
        ctx.fill();

    }
}