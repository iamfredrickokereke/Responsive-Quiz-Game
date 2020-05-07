// Assigning the Variables
const wrapper = document.querySelector('.wrapper'),
    currentQuestion = document.getElementById('currentquestion'),
    allAvailableQuestions = document.getElementById('allquestions'),
    question = document.getElementById('questionbank'),
    optionOne = document.querySelector('.option-1'),
    optionTwo = document.querySelector('.option-2'),
    optionThree = document.querySelector('.option-3'),
    optionFour = document.querySelector('.option-4'),
    options = document.querySelectorAll('li'),
    btn = document.getElementById('btn');


let currentScore = document.querySelector('.current-score'),
    activeQuestion = 1;
score = 0;


// QuestionsBank
const myQuestions = [    
   {
        question: 'Who is Donald Trump?',
        options: [
            'A footballer turned politician',
            'A former president of Nigeria',
            'A billionaire who lives in seattle ',
            'A current seating president of the united states of America',
        ],
        answer: 'A current seating president of the united states of America.',
    },

    {
        question: 'Who is the aurthor of the book Deep Work?',
        options: [
            'Brian Tracy',
            'Donal Trump',
            'Fredrick Okereke',
            'Carl Newport',
        ],
        answer: 'Carl Newport',
    },

    {
        question: 'Who made this statement - Go to bed smarter than when you woke up.?',
        options: [
            'Mike muddock',
            'Myles munroe',
            'Charles spungeon',
            'Charlie Munger',
        ],
        answer: 'Charlie Munger',
    },

];


// Change text content
const showContent = () => {
    currentQuestion.textContent = activeQuestion;
    allAvailableQuestions.textContent = myQuestions.length;
    currentScore.textContent = score;
    question.textContent = myQuestions[activeQuestion - 1].question;
    optionOne.textContent = myQuestions[activeQuestion - 1].options[0];
    optionTwo.textContent = myQuestions[activeQuestion - 1].options[1];
    optionThree.textContent = myQuestions[activeQuestion - 1].options[2];
    optionFour.textContent = myQuestions[activeQuestion - 1].options[3];
}

showContent();

// Display result
const showResult = () => {
    wrapper.classList.add('result', 'blue');
    const result = (score / myQuestions.length) * 100;
    let remark;
    if (result < 50) {
        remark = 'Dont be discouraged, You can do this just Equip yourself.';
    } else if (result <= 75) {
        remark = 'Bravo, Hold on Gather more materials and have more handsOn Session.';
    } else if (result <= 90) {
        remark = 'Ooin, You\'re doing Well.!'
    } else {
        remark = 'Fantabulous, Agba Awo, i say ooin, You did Excellently!';
    }
    wrapper.innerHTML = `
   <h1>${result}%</h1> 
   <h3 class="center mb">${remark}</h3>
   <a href="index.html" class="btn">RETRY?</a>
   `;
}

const disableBtn = () => {
    options.forEach(option => {
        option.classList.add('disabled');
        if (option.textContent === myQuestions[activeQuestion - 1].answer) {
            option.classList.add('correct');
        }
    })
}

const checkOptionOne = () => {

    if (optionOne.textContent === myQuestions[activeQuestion - 1].answer) {
        optionOne.classList.add('correct');
        score++;
        showContent();

    } else {
        optionOne.classList.add('wrong');
    }
    disableBtn();
    btn.classList.add('show');

    if (activeQuestion === myQuestions.length) {
        btn.textContent = 'Submit';
    }

}

const checkOptionTwo = () => {
    if (optionTwo.textContent === myQuestions[activeQuestion - 1].answer) {
        optionTwo.classList.add('correct');
        score++;
        showContent();

    } else {
        optionTwo.classList.add('wrong');
    }
    disableBtn();
    btn.classList.add('show');

    if (activeQuestion === myQuestions.length) {
        btn.textContent = 'Submit';
    }
}

const checkOptionThree = () => {

    if (optionThree.textContent === myQuestions[activeQuestion - 1].answer) {
        optionThree.classList.add('correct');
        score++;
        showContent();

    } else {
        optionThree.classList.add('wrong');
    }
    disableBtn();
    btn.classList.add('show');

    if (activeQuestion === myQuestions.length) {
        btn.textContent = 'Submit';
    }

}

const checkOptionFour = () => {

    if (optionFour.textContent === myQuestions[activeQuestion - 1].answer) {
        optionFour.classList.add('correct');
        score++;
        showContent();

    } else {
        optionFour.classList.add('wrong');
    }
    disableBtn();
    btn.classList.add('show');

    if (activeQuestion === myQuestions.length) {
        btn.textContent = 'Submit';
    }
}

const nextQuestion = () => {
    if (activeQuestion < myQuestions.length) {
        activeQuestion = activeQuestion + 1;
        showContent();
        btn.classList.remove('show');
        options.forEach(option => {
            option.classList.remove('wrong', 'correct', 'disabled');
        })
    } else {
        showResult();
    }
}

// Calling all EventListener
optionOne.addEventListener('click', checkOptionOne);
optionTwo.addEventListener('click', checkOptionTwo);
optionThree.addEventListener('click', checkOptionThree);
optionFour.addEventListener('click', checkOptionFour);
btn.addEventListener('click', nextQuestion);
