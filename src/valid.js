const teachers = require('./teachers.json');
const teachersUkr = require('./teachersUkr.json');

const checkKeyWord = (text) => {
    const keyWords = [
        'Пробне', 'пробне', 
        'Пробное', 'пробное',
        'Пробный', 'пробный',
        'Пробные', 'пробные',
        'Пробні', 'пробні'
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

const ukrValidation = (text) => {
    if (!checkKeyWord(text)) return false;

    const ukr = ['У-', 'У.о', 'у-', 'у.о'];

    for (const elem of ukr) {
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

const checkUkrTeacher = (text) => {
    for (const teacher in teachersUkr) {
        for (const group of teachersUkr[teacher]) {
            if (text.includes(group)) return teacher;
        }
    }

    return undefined;
}

module.exports = { mathValidation, checkMathTeacher, ukrValidation, checkUkrTeacher };