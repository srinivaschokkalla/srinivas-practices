"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Current = void 0;
var Account_1 = require("./Account");
var Current = /** @class */ (function (_super) {
    __extends(Current, _super);
    function Current() {
        var _this = _super.call(this) || this;
        _this.minimumBalance = 1000;
        _this.balance = 800;
        _this.accountType = "Current";
        _this.accountNumber = 'Cur' + Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
        return _this;
    }
    return Current;
}(Account_1.Account));
exports.Current = Current;
