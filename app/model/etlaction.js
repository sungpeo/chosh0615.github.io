"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var action_1 = require('./action');
var EtlAction = (function (_super) {
    __extends(EtlAction, _super);
    function EtlAction(name, constructs) {
        _super.call(this, name);
        this.name = name;
        this.constructs = constructs;
    }
    return EtlAction;
}(action_1.Action));
exports.EtlAction = EtlAction;
//# sourceMappingURL=etlaction.js.map