// TODO 1: Import Express
import express from 'express';


// TODO 2: Create the Express app and store it in a variable named app
const app = express();


// TODO 3: Allow React to access the server
import cors from 'cors'
app.use(cors({ origin: 'http://localhost:3000' }));



// TODO 5: Create the home route "/"
app.get('api/', (req, res) => {
     res.send('Hello from the back-end server');
   });




// TODO 4: Start the server on port 3000
app.listen(3000, () => {
     console.log('message');
   });
