// Provides config for the app in conjunction with dotenv
// Config is the only place accesses 'dotenv'
import dotenv from "dotenv";

dotenv.config();

export default {
  adminPassword: process.env.ADMIN_PASSWORD,
  dbClientURL:
    process.env.DB_CLIENT_URL ||
    // Use localhost if no DB_CLIENT_URL is provided
    "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000",

  // 🎵 NOTE: We would not do this if there were multiple collections.
  dbCollection: "products",
  dbName: "products",
  port: process.env.PORT || 3000,
};
