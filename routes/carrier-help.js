const express = require('express');
const axios = require('axios');
const router = express.Router()
const app = express();

// Middleware to parse incoming form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// API endpoint for career guidance
router.post('/', async (req, res) => {
    try {
        const userInput = req.body.career;
        const strin = "give me a carrer path to become a " + userInput + " . I don't want any other answer adn no other extra word, just give me teh career path. Also give every point in between a <h3></h3> tag, make the sub headings enclosed by a h2 tag like <h2></h2>. make the paragraph more detailed"
        let careerRecommendation
       careerRecommendation = await generateCareerRecommendation(strin);
        console.log(careerRecommendation)
        res.render('edit-library', { careerRecommendation }); 
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

// Function to generate career recommendation using Cohere AI API
async function generateCareerRecommendation(prompt) {
    const options = {
        method: 'POST',
        url: 'https://api.cohere.ai/v1/generate',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: 'Bearer VjzKnm3mbZ4NQ55PVhBFLgpLActkEwiEl6LsYFKq'
        },
        data: {
            max_tokens: 500,  // Adjust as needed
            truncate: 'END',
            return_likelihoods: 'NONE',
            prompt: prompt
        }
    };

    const response = await axios.request(options);
    console.log(response.data.generations[0].text)
    return response.data.generations[0].text;
}

module.exports = router

