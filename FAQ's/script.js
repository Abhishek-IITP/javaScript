function toggleAnswer(index) {
    const answers = document.querySelectorAll('.faq-answer');
    const answer = answers[index];
  
    if (answer.classList.contains('open')) {
      answer.classList.remove('open');
    } else {
      // Close all other answers before opening the clicked one
      answers.forEach(a => a.classList.remove('open'));
      answer.classList.add('open');
    }
  }
  