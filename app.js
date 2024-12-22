const express = require("express");
const app = express();
const cors = require("cors");
const serviceRoute = require("./routes/servrice");
const database = require("./config/database");

app.use(cors());
app.use(express.json());

database(); 

app.use("/api", serviceRoute); 

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});
app.get("/", (req, res) => {
    res.send("Hello Testing is working  !");
});


app.listen(process.env.PORT || 5008, () => {
    console.log("Server is running on port 5008");
});



 