// repository/userRepository.ts

export class UserRepository {
    private users = [
      { id: 1, name: "John Doe", email: "john.doe@example.com" },
      { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    ];
  
    getAllUsers() {
      return this.users;
    }
  
    getUserById(id: number) {
      return this.users.find((user) => user.id === id);
    }
  
    addUser(user: { id: number; name: string; email: string }) {
      this.users.push(user);
      return this.getAllUsers(); // Return the updated list of users
    }
  
    updateUser(id: number, user: { name?: string; email?: string }) {
        const index = this.users.findIndex((u) => u.id === id);
        if (index !== -1) {
          this.users[index] = { ...this.users[index], ...user };
        }
        return this.getAllUsers(); // Return the updated list of users
      }
    
  }
  