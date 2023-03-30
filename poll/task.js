let xhr = new XMLHttpRequest();
xhr.open(`GET`, `https://students.netoservices.ru/nestjs-backend/poll`);
xhr.send();

xhr.addEventListener(`readystatechange`, () => {
  if (xhr.readyState === xhr.DONE) {
    const request = JSON.parse(xhr.response);
    const pullTitle = document.querySelector(`.poll__title`);
    const pullAnswers = document.querySelector(`.poll__answers`);
    pullTitle.textContent = request.data.title;
    request.data.answers.forEach(button => {
      pullAnswers.appendChild(creatAnswer(button));
    });
  }
})

function creatAnswer(question) {
  const answer = document.createElement(`button`);
  answer.setAttribute(`class`, `poll__answer`);
  answer.textContent = question;
  answer.addEventListener(`click`, () => alert(`Спасибо, ваш голос засчитан!`));
  return answer
}