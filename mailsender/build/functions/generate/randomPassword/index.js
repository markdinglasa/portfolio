"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomPassword = void 0;
const shared_1 = require("../../../shared");
const randomPassword = async (length = 12) => {
    try {
        if (length < 8) {
            throw new Error("Password length must be at least 8 characters for security.");
        }
        const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
        const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numberChars = "0123456789";
        const specialChars = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";
        // Ensure the password contains at least one character from each set
        const getRandomChar = (charSet) => charSet[Math.floor(Math.random() * charSet.length)];
        const randomChars = [
            getRandomChar(lowerCaseChars),
            getRandomChar(upperCaseChars),
            getRandomChar(numberChars),
            getRandomChar(specialChars),
        ];
        // Fill the rest of the password length with random characters from all sets
        const allChars = lowerCaseChars + upperCaseChars + numberChars + specialChars;
        while (randomChars.length <= length) {
            randomChars.push(getRandomChar(allChars));
        }
        // Shuffle the password to ensure randomness
        for (let i = randomChars.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [randomChars[i], randomChars[j]] = [randomChars[j], randomChars[i]];
        }
        return { data: randomChars.join("").toString(), message: shared_1.Success.m001 };
    }
    catch (error) {
        logging.log("----------------------------------------");
        logging.error("Generate-Fn [randomPassowrd]:", error.message);
        logging.log("----------------------------------------");
        return { data: null, message: error.message || shared_1.Error.m001 };
    }
};
exports.randomPassword = randomPassword;
//# sourceMappingURL=index.js.map