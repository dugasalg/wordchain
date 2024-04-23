// Game controller with gameplay logic and validations
const User = require('../models/User');
const { getLastLetter, getWordForSituation, calculateScore } = require('../utils/gameUtils');

exports.beginGame = async (req, res) => {
    try {
        const userId = req.body.userId;
        const word = req.body.word;
        if (!userId || !word) return res.status(400).json({ message: 'Required parameters missing.' });
        if (!/[^A-Za-z0-9]+[A-Za-z0-9]*[A-Za-z0-9]*$/g.test(word)) return res.status(400).json({ message: 'Invalid word. Only alphabetical and numeric characters allowed.' });
        const lastLetter = getLastLetter(word);
        const nextWord = getWordForSituation(lastLetter);
        const score = calculateScore(word);
        res.json({lastLetter, nextWord, score});
    } catch (err) {
        res.status(500).json(err);
    }
};