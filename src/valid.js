const checkKeyWord = (text) => {
    const keyWords = ['Пробне', 'пробне', 'Пробное', 'пробное'];

    for (const elem of keyWords) {
        if (text.includes(elem)) return true;
    }

    return false;
};

const mathValidation = (text) => {
    if (!checkKeyWord(text)) return false;

    const math = ['М-', 'М.о'];

    for (const elem of math) {
        if (text.includes(elem)) return true;
    }

    return false;
};

module.exports = { mathValidation };