const conf ={
    //appwrite configuration
    appwriteUrl: String(process.env.VITE_APPWRITE_ENDPOINT || "http://localhost/v1"),
    appwriteProject: String(process.env.VITE_APPWRITE_PROJECT_ID || "default"),
    appwriteDatabase: String(process.env.VITE_APPWRITE_DATABASE_ID || "default"),
    appwriteCollection: String(process.env.VITE_APPWRITE_COLLECTION_ID || "default"),

    //clerk configuration
    clerkFrontendApi: String(process.env.VITE_CLERK_FRONTEND_API || "https://api.clerk.dev"),
    clerkPublishableKey: String(process.env.VITE_CLERK_PUBLISHABLE_KEY || "default"),
}

export default conf;