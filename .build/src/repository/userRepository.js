"use strict";
// repository/userRepository.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
class UserRepository {
    constructor() {
        this.users = [
            { id: 1, name: "John Doe", email: "john.doe@example.com" },
            { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
        ];
    }
    getAllUsers() {
        return this.users;
    }
    getUserById(id) {
        return this.users.find((user) => user.id === id);
    }
    addUser(user) {
        this.users.push(user);
        return this.getAllUsers(); // Return the updated list of users
    }
    updateUser(id, user) {
        const index = this.users.findIndex((u) => u.id === id);
        if (index !== -1) {
            this.users[index] = { ...this.users[index], ...user };
        }
        return this.getAllUsers(); // Return the updated list of users
    }
}
exports.UserRepository = UserRepository;
