const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const reviewsController = require('./Controller/reviewsController'); 
const signupRouter = require('./Controller/signup'); 
const signinRoute = require('./Controller/signin');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/signup', signupRouter);
app.use('/signin', signinRoute);
app.get('/reviews', reviewsController.getAllReviews);      
app.post('/reviews', reviewsController.addReview);         
app.put('/reviews/:id', reviewsController.updateReview);  
app.delete('/reviews/:id', reviewsController.deleteReview); 

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
