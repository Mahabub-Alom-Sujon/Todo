const app = require("./app");
const dotenv = require('dotenv');
dotenv.config({ path: "./.env" });
const hostname = '127.0.0.1';
// server
const port = process.env.PORT || 8000;



app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/api/v1`);

});