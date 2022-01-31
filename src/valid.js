const teachersMath = require('./json/teachersMath.json');
const teachersEng = require('./json/teachersEng.json');
const teachersUkr = require('./json/teachersUkr.json');

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

const checkMathTeacher = (text) => {
    for (const teacher in teachersMath) {
        for (const group of teachersMath[teacher]) {
            if (text.includes(group)) return teacher;
        }
    }

    return undefined;
}

const ukrValidation = (text) => {
    if (!checkKeyWord(text)) return false;

    const ukr = ['У-', 'У.о', 'у-', 'у.о'];

    for (const elem of ukr) {
        if (text.includes(elem)) return true;
    }

    return false;
};

const checkUkrTeacher = (text) => {
    for (const teacher in teachersUkr) {
        for (const group of teachersUkr[teacher]) {
            if (text.includes(group)) return teacher;
        }
    }

    return undefined;
}

const engValidation = (text) => {
    if (!checkKeyWord(text)) return false;

    const eng = ['А-', 'А.о', 'а-', 'а.о'];

    for (const elem of eng) {
        if (text.includes(elem)) return true;
    }

    return false;
};

const checkEngTeacher = (text) => {
    for (const teacher in teachersEng) {
        for (const group of teachersEng[teacher]) {
            if (text.includes(group)) return teacher;
        }
    }

    return undefined;
}

module.exports = { mathValidation, checkMathTeacher, ukrValidation, checkUkrTeacher, engValidation, checkEngTeacher };