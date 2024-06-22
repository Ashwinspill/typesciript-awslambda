// service/userService.ts

import { UserRepository } from "../repository/userRepository";

export class UserService {
  private userRepository = new UserRepository();

  getAllUsers() {
    return this.userRepository.getAllUsers();
  }

  getUserById(id: number) {
    return this.userRepository.getUserById(id);
  }

  addUser(user: { id: number; name: string; email: string }) {
    return this.userRepository.addUser(user); // Return the updated list of users
  }

  updateUser(id: number, user: { name?: string; email?: string }) {
    return this.userRepository.updateUser(id, user);
  }
}
