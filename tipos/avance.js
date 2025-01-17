const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const questionnaire = document.getElementById('questionnaire');
const questions = document.querySelectorAll('.question');

// Total de preguntas
const totalQuestions = questions.length;
let answeredQuestions = 0;

// Escucha los cambios en las respuestas
questionnaire.addEventListener('input', () => {
  // Calcula las preguntas respondidas
  answeredQuestions = Array.from(questions).filter((q) => {
    const input = q.querySelector('input');
    if (input.type === 'checkbox') {
      return q.querySelector('input:checked') !== null;
    } else {
      return input.value.trim() !== '';
    }
  }).length;

  // Actualiza el texto y la barra de progreso
  progressText.textContent = `${answeredQuestions} de ${totalQuestions}`;
  const progressHeight = (answeredQuestions / totalQuestions) * 100;
  progressBar.style.height = `${progressHeight}%`;
});
