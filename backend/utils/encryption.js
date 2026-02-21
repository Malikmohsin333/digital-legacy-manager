const crypto = require('crypto');

// Encryption settings
const ALGORITHM = 'aes-256-cbc';
const ENCRYPTION_KEY = crypto.createHash('sha256')
    .update(String(process.env.JWT_SECRET || 'default-key'))
    .digest('base64')
    .substr(0, 32);

// Encrypt function (for passwords)
exports.encrypt = (text) => {
    try {
        // Generate random initialization vector
        const iv = crypto.randomBytes(16);
        
        // Create cipher
        const cipher = crypto.createCipheriv(ALGORITHM, ENCRYPTION_KEY, iv);
        
        // Encrypt
        let encrypted = cipher.update(text, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        
        return {
            iv: iv.toString('hex'),
            encryptedData: encrypted
        };
    } catch (error) {
        console.error('Encryption error:', error);
        throw error;
    }
};

// Decrypt function
exports.decrypt = (encryptedData, ivHex) => {
    try {
        const iv = Buffer.from(ivHex, 'hex');
        const decipher = crypto.createDecipheriv(ALGORITHM, ENCRYPTION_KEY, iv);
        
        let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        
        return decrypted;
    } catch (error) {
        console.error('Decryption error:', error);
        throw error;
    }
};