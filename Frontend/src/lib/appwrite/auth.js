import { Client, Account, ID } from "appwrite";
import conf from "../../conf";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProject);
    this.account = new Account(this.client);
  }
  //createAccount function
  async createAccount({email, password, name}) {
    try {
      const response = await this.account.create(ID.unique(), email, password, name);
      if (response) {
        return {
          success: true,
          message: "Account created successfully",
          data: response,
        };
      }else {
        return {
          success: false,
          message: "Account creation failed",
        };
      }
    } catch (error) {
      throw new Error(`Failed to create account: ${error.message}`);
    }
  }
//login function
  async login({email, password}) {
    try {
      const response = await this.account.createEmailSession(email, password);
      if (response) {
        return {
          success: true,
          message: "Login successful",
          data: response,
        };
      } else {
        return {
          success: false,
          message: "Login failed",
        };
      }
    } catch (error) {
      throw new Error(`Failed to login: ${error.message}`);
    }
  }
  //getCurrentUser function
  async getCurrentUser() {
    try {
      const user = await this.account.get();
      return {
        success: true,
        data: user,
      };
    } catch (error) {
      return {
        success: false,
        message: `Failed to get current user: ${error.message}`,
      };
    }
  }
  //logout function
  async logout() {
    try {
      await this.account.deleteSession("current");
      return {
        success: true,
        message: "Logout successful",
      };
    } catch (error) {
      return {
        success: false,
        message: `Failed to logout: ${error.message}`,
      };
    }
  }
}

const authService = new AuthService();

export default authService;
