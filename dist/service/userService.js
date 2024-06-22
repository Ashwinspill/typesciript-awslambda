"use strict";
// service/userService.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const userRepository_1 = require("../repository/userRepository");
class UserService {
    constructor() {
        this.userRepository = new userRepository_1.UserRepository();
    }
    getAllUsers() {
        return this.userRepository.getAllUsers();
    }
    getUserById(id) {
        return this.userRepository.getUserById(id);
    }
    addUser(user) {
        return this.userRepository.addUser(user); // Return the updated list of users
    }
    updateUser(id, user) {
        return this.userRepository.updateUser(id, user);
    }
}
exports.UserService = UserService;
