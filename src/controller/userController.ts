// controller/userController.ts

import { APIGatewayEvent, Context, APIGatewayProxyResult } from "aws-lambda";
import { UserService } from "../service/userService";

const userService = new UserService();

export const getUsers = async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  const users = userService.getAllUsers();
  return {
    statusCode: 200,
    body: JSON.stringify(users),
  };
};

export const getUser = async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  const id = parseInt(event.pathParameters?.id || "0", 10);
  const user = userService.getUserById(id);
  if (user) {
    return {
      statusCode: 200,
      body: JSON.stringify(user),
    };
  } else {
    return {
      statusCode: 404,
      body: "User not found",
    };
  }
};

export const createUser = async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  const user = JSON.parse(event.body || "{}");

  const updatedUsers = userService.addUser(user); // Get the updated list of users
  console.log("Updated Users:", updatedUsers); // Log the updated user list to console
  return {
    statusCode: 201,
    body: JSON.stringify(updatedUsers), // Return the updated list of users in the response
  };
};

export const updateUser = async (
    event: APIGatewayEvent,
    context: Context
  ): Promise<APIGatewayProxyResult> => {
    const id = parseInt(event.pathParameters?.id || "0", 10);
    const user = JSON.parse(event.body || "{}");
    
    const updatedUsers = userService.updateUser(id, user);
    console.log("Updated Users:", updatedUsers); 
    
    return {
      statusCode: 200,
      body: JSON.stringify(updatedUsers), 
    };
};
