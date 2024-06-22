"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const userController_1 = require("./controller/userController");
Object.defineProperty(exports, "getUsers", { enumerable: true, get: function () { return userController_1.getUsers; } });
Object.defineProperty(exports, "getUser", { enumerable: true, get: function () { return userController_1.getUser; } });
Object.defineProperty(exports, "createUser", { enumerable: true, get: function () { return userController_1.createUser; } });
Object.defineProperty(exports, "updateUser", { enumerable: true, get: function () { return userController_1.updateUser; } });
