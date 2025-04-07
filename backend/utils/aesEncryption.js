import crypto from 'crypto';

const key = crypto.scryptSync('secret_password', 'salt', 32);
const iv = Buffer.alloc(16, 0);

export const encrypt = (text) => {
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  return cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
};

export const decrypt = (text) => {
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
  return decipher.update(text, 'hex', 'utf8') + decipher.final('utf8');
};
