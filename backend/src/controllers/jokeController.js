// controllers/JokeController.ts
import Joke from '../models/Joke';

export const getAllJokes = async (req, res) => {
  const jokes = await Joke.findAll();
  res.json(jokes);
};

export const postJoke = async (req, res) => {
  const { content, authorId } = req.body;
  const newJoke = await Joke.create({ content, authorId });
  res.json(newJoke);
};
