"use strict";
// controller/userController.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const userService_1 = require("../service/userService");
const userService = new userService_1.UserService();
const getUsers = async (event, context) => {
    const users = userService.getAllUsers();
    return {
        statusCode: 200,
        body: JSON.stringify(users),
    };
};
exports.getUsers = getUsers;
const getUser = async (event, context) => {
    var _a;
    const id = parseInt(((_a = event.pathParameters) === null || _a === void 0 ? void 0 : _a.id) || "0", 10);
    const user = userService.getUserById(id);
    if (user) {
        return {
            statusCode: 200,
            body: JSON.stringify(user),
        };
    }
    else {
        return {
            statusCode: 404,
            body: "User not found",
        };
    }
};
exports.getUser = getUser;
const createUser = async (event, context) => {
    const user = JSON.parse(event.body || "{}");
    const updatedUsers = userService.addUser(user); // Get the updated list of users
    console.log("Updated Users:", updatedUsers); // Log the updated user list to console
    return {
        statusCode: 201,
        body: JSON.stringify(updatedUsers), // Return the updated list of users in the response
    };
};
exports.createUser = createUser;
const updateUser = async (event, context) => {
    var _a;
    const id = parseInt(((_a = event.pathParameters) === null || _a === void 0 ? void 0 : _a.id) || "0", 10);
    const user = JSON.parse(event.body || "{}");
    const updatedUsers = userService.updateUser(id, user);
    console.log("Updated Users:", updatedUsers);
    return {
        statusCode: 200,
        body: JSON.stringify(updatedUsers),
    };
};
exports.updateUser = updateUser;
