import express from "express";
const app = express();
app.get("/", (req, res) => {
    res.send("Typescript works with node!");
});
app.listen(4321, () => {
    console.log("Running on 4321.");
});
//# sourceMappingURL=index.js.map