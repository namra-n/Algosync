import Snippet from '../models/Snippet.js';
import { encrypt, decrypt } from '../utils/aesEncryption.js';

export const createSnippet = async (req, res) => {
  try {
    let { title, content, tags, encrypted } = req.body;
    if (encrypted) content = encrypt(content);

    const snippet = new Snippet({ title, content, tags, encrypted });
    await snippet.save();
    res.status(201).json(snippet);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllSnippets = async (req, res) => {
  try {
    const snippets = await Snippet.find();
    const decrypted = snippets.map(s => ({
      ...s._doc,
      content: s.encrypted ? decrypt(s.content) : s.content
    }));
    res.json(decrypted);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
