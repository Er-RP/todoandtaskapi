require("dotenv").config();
const ENV = process.env;

export const config =  {
    PORT: parseInt(ENV.PORT as string) || 8000,
    MONGO_URI: ENV.MONGO_URI as string
}