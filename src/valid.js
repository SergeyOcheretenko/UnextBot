const teachers = require('./teachers.json');

const checkKeyWord = (text) => {
    const keyWords = [
        'Пробне', 'пробне', 
        'Пробное', 'пробное',
        'Пробный', 'пробный',
        'Пробные', 'пробные'
    ];

    for (const elem of keyWords) {
        if (text.includes(elem)) return true;
    }

    return false;
};

const mathValidation = (text) => {
    if (!checkKeyWord(text)) return false;

    const math = ['М-', 'М.о', 'м-', 'м.о'];

    for (const elem of math) {
        if (text.includes(elem)) return true;
    }

    return false;
};

const checkMathTeacher = (text) => {
    for (const teacher in teachers) {
        for (const group of teachers[teacher]) {
            if (text.includes(group)) return teacher;
        }
    }

    return undefined;
}

module.exports = { mathValidation, checkMathTeacher };