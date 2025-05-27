import conf from "../../conf";
import { Client, ID , Databases, Storage, Query } from "appwrite";

export class Service{
    Client = new Client();
    databases;
    storage;
    constructor() {
        this.Client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProject);
        this.databases = new Databases(this.Client);
        this.storage = new Storage(this.Client);
    }
    async createTodo({title, description,completed,due_date,userId,createdAt}){
        try {
            const response = await this.databases.createDocument(
                conf.appwriteDatabase,
                conf.appwriteCollection,
                ID.unique(),
                {
                    title,
                    description,
                    completed,
                    due_date,
                    userId,
                    createdAt
                }
            );
            return {
                success: true,
                message: "Todo created successfully",
                data: response
            };
        } catch (error) {
            throw new Error(`Failed to create todo: ${error.message}`);
        }
    }
    async updateTodo({id,title, description,completed,due_date,userId,createdAt}){
        try {
            const response = await this.databases.updateDocument(
                conf.appwriteDatabase,
                conf.appwriteCollection,
                id,
                {
                    title,
                    description,
                    completed,
                    due_date,
                    userId,
                    createdAt
                }
            );
            return {
                success: true,
                message: "Todo updated successfully",
                data: response
            };
        } catch (error) {
            throw new Error(`Failed to update todo: ${error.message}`);
        }
    }
    async deleteTodo(id){
        try {
            const response = await this.databases.deleteDocument(
                conf.appwriteDatabase,
                conf.appwriteCollection,
                id
            );
            return {
                success: true,
                message: "Todo deleted successfully",
                data: response
            };
        } catch (error) {
            throw new Error(`Failed to delete todo: ${error.message}`);
        }
    }
    async getTodos(userId) {
        try {
            const response = await this.databases.listDocuments(
                conf.appwriteDatabase,
                conf.appwriteCollection,
                [Query.equal("userId", userId)]
            );
            return {
                success: true,
                data: response.documents
            };
        } catch (error) {
            throw new Error(`Failed to get todos: ${error.message}`);
        }
    }
    async getTodo(id) {
        try {
            const response = await this.databases.getDocument(
                conf.appwriteDatabase,
                conf.appwriteCollection,
                id
            );
            return {
                success: true,
                data: response
            };
        } catch (error) {
            throw new Error(`Failed to get todo: ${error.message}`);
        }
    }
}

const service = new Service();
export default service