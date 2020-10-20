const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const errorInfo = document.querySelector('.subscribe__info');
const subscribeForm = document.querySelector('.subscribe');
const submitBtn = document.querySelector('.subscribe__button');
const email = document.querySelector('.subscribe__email');

const checkForm = e => {
    e.preventDefault();
    if (re.test(email.value)) {
        removeClass()
        errorInfo.textContent = 'You have been subscribed';
        subscribeForm.classList.add('success');
    } else {
        removeClass()
        errorInfo.textContent = 'Please provide a valid email';
        subscribeForm.classList.add('error');
    }
};

const removeClass = () => {
    subscribeForm.classList.remove('error');
    subscribeForm.classList.remove('success');
}

submitBtn.addEventListener('click', checkForm);
