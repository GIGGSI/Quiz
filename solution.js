function solve() {
  //TODO...

  let quizzie = document.getElementById('quizzie');
  let sections = document.getElementsByTagName('section');
  let result = document.querySelector('.results-inner h1');

  let correctAnswers = ['Дунав', 'Кубрат', '681', 'Аспарух', 'Хан(кан)', 'Тервел', 'Крум', '811', 'Омуртаг', 'Тервел'];

  let userAnswers = 0;
  let currentStep = 0;

  let handler = (e) => {

    if (e.target.className === 'answer-text') {

      console.log(e.target.innerHTML);

      sections[currentStep].style.display = 'none';

      let isAnswerCorrect = correctAnswers.includes(e.target.innerHTML);
      if (isAnswerCorrect) {
        userAnswers++;
      }
      currentStep++;

      if (currentStep < correctAnswers.length) {
        sections[currentStep].style.display = 'block';

      }

      if (currentStep === correctAnswers.length) {
        quizzie.removeEventListener('click', handler)

        document.querySelector('#results').style.display = 'block';

        result.innerHTML = correctAnswers.length === userAnswers ?
          'Знанията ти по история са похвални! 10 Верни отговора!' : ` Отговорили сте вярно на ${userAnswers} въпроса`;
        let reset = document.getElementById('reset')
        reset.addEventListener('click', function () {
          setInterval(function () { location.reload() }, 500)

        })

      }
    }
  }
  quizzie.addEventListener('click', handler)
}
