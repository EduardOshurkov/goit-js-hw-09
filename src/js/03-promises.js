import Notiflix from 'notiflix';


const refs = {
  form: document.querySelector('.form')
}




function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

}


function start(element) {
  element.preventDefault();
  const {
    delay: { value: delay },
    step: { value: step },
    amount: { value: amount },
  } = refs.form;
  for (let i = 0; i < amount; i += 1) {
    const timeDelay = +delay + +step * i

  createPromise(i+1, timeDelay)
  .then(({ position, delay }) => {
     Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  }
}

refs.form.addEventListener('submit', start)