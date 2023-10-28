import './index.html'
import './index.scss'
import { picomask } from 'picomask';
import validateData from './modules/validation.js';
import getData from './modules/getData.js';
import clearFields from './modules/clearFields.js';

const resultMessage = document.querySelector('.result')

const phoneInput = document.querySelector('input[data=tel-input]')
const form = document.querySelector('.form')
const formItems = document.querySelectorAll('.form__item_input')

const popUp = document.querySelector('.popup')
const popUpBtn = document.querySelector('#popUpBtn')
const closePopUpBtn = document.querySelector('#closePopUpBtn')


let isDataPending = false

const dataStatuses = {
  success: 'success',
  error: 'error'
}

// Phone number input
phoneInput.oninput = (e) => {
  const inputStr = e.target.value
  const mask = '+nnn (nn) nnn-nn-nn'
  const {value} = picomask(inputStr, mask)
  e.target.value = value
}

// Validation and data fetching
form.onsubmit = async (e) => {
  e.preventDefault()
  const isDataValid = validateData(formItems)

  if (!isDataPending && isDataValid) {
    isDataPending = true
    const data = await getData()
    resultMessage.lastElementChild.textContent = data.message

    if (data.status === dataStatuses.success) {
      resultMessage.lastElementChild.style.color = 'green'
      clearFields(formItems)

    } else {
      resultMessage.lastElementChild.style.color = 'red'
    }
    isDataPending = false
  }
}

// Modal
popUpBtn.onclick = () => {
  document.body.style.overflow = 'hidden'
  popUp.classList.remove('hidden')
};

closePopUpBtn.onclick = () => {
  document.body.style.overflow = ''
  popUp.classList.add('hidden')
};

popUp.onclick = (e) => {
  if (e.target === e.currentTarget) {
    document.body.style.overflow = ''
    popUp.classList.add('hidden')
  }
};