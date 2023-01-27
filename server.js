        // 1. Import the express module
        const express = require('express');
        // 2. Create an instance of express
        const app = express();
        // 3. Define the port
        const port = 3000;
        // 4. Define the route
        app.get('/', (req, res) => {
            res.send('Hello World!');
        }   );
        // 5. Start the server
        app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`)
        }   );
        