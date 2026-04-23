import sequelize from "./config/db.js";
import app from './app.js'
import morgan from "morgan";

app.use(morgan("dev"));

const PORT = process.env.PORT || 5000;


app.listen(PORT, async () => {
    try {
        console.log("Connecting to database...",process.env.DATABASE_URL);
        await sequelize.authenticate();
        await sequelize.sync({ alter: true });
        console.log("Database connected");
        console.log(`Server running on port ${PORT}`);
    } catch (error) {
        console.error("Unable to connect:", error);
    }
});