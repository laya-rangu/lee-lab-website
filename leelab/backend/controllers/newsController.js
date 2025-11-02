import News from "../models/news.model.js";

export const getNews = async (req, res) => {
  const news = await News.find().sort({ date: -1 });
  res.json(news);
};

export const addNews = async (req, res) => {
  const newsItem = new News(req.body);
  const saved = await newsItem.save();
  res.status(201).json(saved);
};

export const deleteNews = async (req, res) => {
  await News.findByIdAndDelete(req.params.id);
  res.json({ message: "News deleted" });
};
