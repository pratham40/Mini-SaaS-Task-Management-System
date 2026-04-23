import sequelize from "./config/db.js";
import app from './app.js'


const PORT = process.env.PORT || 5000;


app.listen(PORT, async () => {
    try {
        console.log("Connecting to database...",process.env.DATABASE_URL);
        await sequelize.authenticate();
        console.log("Database connected");
        console.log(`Server running on port ${PORT}`);
    } catch (error) {
        console.error("Unable to connect:", error);
    }
});