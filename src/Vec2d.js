"use strict";
exports.__esModule = true;
var Vec2d = /** @class */ (function () {
    function Vec2d(x, y) {
        this.x = 0;
        this.y = 0;
        this.x = x;
        this.y = y;
    }
    Vec2d.prototype.add = function (v) {
        return new Vec2d(this.x + v.x, this.y + v.y);
    };
    Vec2d.prototype.copy = function () {
        return new Vec2d(this.x, this.y);
    };
    Vec2d.prototype.distance = function (v) {
        return (v.subtract(this)).norm();
    };
    Vec2d.prototype.mult = function (scalar) {
        return new Vec2d(this.x * scalar, this.y * scalar);
    };
    Vec2d.prototype.norm = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Vec2d.prototype.normalize = function () {
        var norm = this.norm();
        return new Vec2d(this.x / norm, this.y / norm);
    };
    Vec2d.prototype.subtract = function (v) {
        return new Vec2d(this.x - v.x, this.y - v.y);
    };
    Vec2d.prototype.scalarMult = function (a) {
        return new Vec2d(this.x * a, this.y * a);
    };
    Vec2d.prototype.toString = function () {
        return "(" + this.x + ", " + this.y + ")";
    };
    return Vec2d;
}());
exports.Vec2d = Vec2d;
