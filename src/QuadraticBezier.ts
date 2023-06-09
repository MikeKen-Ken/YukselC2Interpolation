import { Vector2 } from 'three';

export default class QuadraticBezier {

    private p0;

    private p1;

    private p2;

    constructor(p0: Vector2, p1: Vector2, p2: Vector2) {

        this.p0 = p0;
        this.p1 = p1;
        this.p2 = p2;

    }

    interpolate(t: number) {

        const { p0, p1, p2 } = this;
        const x = (1 - t) * (1 - t) * p0.x + 2 * (1 - t) * t * p1.x + t * t * p2.x;
        const y = (1 - t) * (1 - t) * p0.y + 2 * (1 - t) * t * p1.y + t * t * p2.y;
        return new Vector2(x, y);

    }

}
