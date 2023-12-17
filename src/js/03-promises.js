import Notiflix from 'notiflix';
Notiflix.Notify.init({
  timeout: 5000,
  useIcon: false,
});

const form = document.querySelector('.form');
form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  let {
    elements: { delay, step, amount },
  } = event.currentTarget;
  const firstDelay = Number(delay.value);
  const delayStep = Number(step.value);
  const totallAmount = Number(amount.value);
  let currentDelay = firstDelay;

  for (let i = 1; i <= totallAmount; i++) {
    createPromise(i, currentDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fullfilled promise ${position} in ${delay}ms.`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms.`
        );
      });
    currentDelay += delayStep;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
