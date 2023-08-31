const express = require('express');
const app = express();
const openai = require('openai');

// Set your OpenAI API key here
openai.api_key = 'your-api-key';

// Middleware to parse JSON request bodies
app.use(express.json());

// API endpoint for career guidance
app.post('/career-guidance', async (req, res) => {
    try {
        const userInput = req.body.input;
        const careerRecommendation = await getCareerRecommendation(userInput);
        res.json({ recommendation: careerRecommendation });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

// Function to get career recommendations from OpenAI
async function getCareerRecommendation(prompt) {
    const response = await openai.Completion.create({
        engine: "davinci", // You can use other engines
        prompt: prompt,
        max_tokens: 50,    // Adjust as needed
        stop: null         // You can specify a stop condition if needed
    });
    return response.choices[0].text.trim();
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
