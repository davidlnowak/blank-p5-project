var Bubble = function (x, y) {
    this.x = x;
    this.y = y;
};

Bubble.prototype = {

    radius: 5,

    update: function() {
        this.x += random(-1, 1);
        this.y += random(0, -2);
        if (this.y - this.radius <= 0) this.y = this.radius + random(0, 2);
    },

    display: function () {
        noStroke();
        fill(190, 32, 32, 100);
        ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
    }

};
