// ...

// สร้างฟังก์ชันสุ่มเลขจำนวนเต็มระหว่าง min ถึง max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// สร้างฟังก์ชันสุ่ม operator และคำนวณคำตอบ
function generateQuestion() {
    const operators = ['+', '-', '*', '/'];
    const operator = operators[getRandomInt(0, 3)];
    const operand1 = getRandomInt(1, 100);
    const operand2 = getRandomInt(1, 100);

    let answer;
    switch (operator) {
        case '+':
            answer = operand1 + operand2;
            break;
        case '-':
            answer = operand1 - operand2;
            break;
        case '*':
            answer = operand1 * operand2;
            break;
        case '/':
            answer = (operand1 / operand2).toFixed(2); // จำกัดทศนิยมเป็น 2 ตำแหน่ง
            break;
    }

    // แสดง operator ที่ถูกคำนวณ
    document.getElementById('operator').textContent = operator;

    return `${operand1} ${operator} ${operand2}`;
}

let score = 0;
let currentQuestion = 1;
const totalQuestions = 20;

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value;
    const question = document.getElementById('question').textContent;

    if (eval(question) == userAnswer) {
        score += 1;
        document.getElementById('score').textContent = score;
    }

    // เริ่มข้อถัดไป
    currentQuestion += 1;

    if (currentQuestion <= totalQuestions) {
        // แสดงข้อที่กำลังเล่น
        document.getElementById('questionNumber').textContent = currentQuestion;
        document.getElementById('question').textContent = generateQuestion();
        document.getElementById('answer').value = '';
    } else {
        // แสดงคะแนนรวมเมื่อเล่นครบทุกข้อ
        alert(`เล่นเสร็จสิ้น! คะแนนรวม: ${score}/${totalQuestions}`);
    }
}

// เริ่มเกมด้วยคำถามแรก
document.getElementById('question').textContent = generateQuestion();
