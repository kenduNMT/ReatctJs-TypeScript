const questions = [
    { question: "What is the capital of France?", choices: ["Paris", "London", "Berlin", "Rome"], answer: "Paris" },
    { question: "What is the largest planet in our solar system?", choices: ["Earth", "Jupiter", "Saturn", "Mars"], answer: "Jupiter" },
    { question: "Who wrote 'Romeo and Juliet'?", choices: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"], answer: "William Shakespeare" },
    { question: "Which country is known as the 'Land of the Rising Sun'?", choices: ["China", "Japan", "India", "South Korea"], answer: "Japan" },
    { question: "What is the chemical symbol for water?", choices: ["H2O", "CO2", "NaCl", "O2"], answer: "H2O" },
    { question: "Which animal is known as the 'King of the Jungle'?", choices: ["Lion", "Tiger", "Leopard", "Cheetah"], answer: "Lion" },
    { question: "Who painted the Mona Lisa?", choices: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"], answer: "Leonardo da Vinci" },
    { question: "Which gas do plants use to photosynthesize?", choices: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], answer: "Carbon dioxide" },
    { question: "Which planet is known as the 'Red Planet'?", choices: ["Venus", "Mars", "Mercury", "Uranus"], answer: "Mars" },
    { question: "What is the currency of Japan?", choices: ["Yuan", "Euro", "Dollar", "Yen"], answer: "Yen" }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let timer;

// Hàm trộn ngẫu nhiên các phần tử trong mảng
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startQuiz() {
    // Hàm bắt đầu trò chơi
    document.getElementById('start-container').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    shuffle(questions);
    displayQuestion();
}

function displayQuestion() {
    // Hàm hiển thị câu hỏi hiện tại và các lựa chọn
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;
    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';
    currentQuestion.choices.forEach(choice => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'choice';
        input.value = choice;
        input.onclick = () => document.getElementById('next-button').classList.remove('hidden');
        label.appendChild(input);
        label.appendChild(document.createTextNode(choice));
        choicesContainer.appendChild(label);
    });
    startTimer();
}

function startTimer() {
    let timeLeft = 15; // Đặt thời gian đếm ngược
    document.getElementById('next-button').classList.add('hidden');
    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        } else {
            document.getElementById('time').textContent = `Thời gian: ${timeLeft} Câu: ${currentQuestionIndex + 1}/${questions.length}`;
            timeLeft -= 1;
        }
    }, 1000);
}

function selectAnswer() {
    // Hàm kiểm tra câu trả lời đã chọn
    clearInterval(timer);
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (selectedChoice && selectedChoice.value === questions[currentQuestionIndex].answer) {
        correctAnswers += 1;
    }
}

function nextQuestion() {
    // Hàm chuyển sang câu hỏi tiếp theo
    selectAnswer();
    currentQuestionIndex += 1;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    // Hàm hiển thị kết quả sau khi hoàn thành bài kiểm tra
    document.getElementById('choices').innerHTML = '';
    document.getElementById('question').textContent = '';
    document.getElementById('time').textContent = '';
    document.getElementById('result').textContent = `Kết quả: ${correctAnswers}/${questions.length}`;
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('restart-button').classList.remove('hidden');
    document.getElementById('next-button').classList.add('hidden');
}

function restartQuiz() {
    // Hàm khởi động lại bài kiểm tra
    currentQuestionIndex = 0;
    correctAnswers = 0;
    document.getElementById('result').classList.add('hidden');
    document.getElementById('restart-button').classList.add('hidden');
    shuffle(questions);  // Trộn lại các câu hỏi khi khởi động lại
    displayQuestion();
}

// Trộn các câu hỏi trước khi bắt đầu bài kiểm tra
shuffle(questions);
