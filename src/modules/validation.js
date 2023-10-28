const emailRegExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

function isEmailValid(value) {
  return emailRegExp.test(value);
}

isEmailValid('123')

const validateData = (fields) => {
  let isDataValid = true;

  for (let i = 0; i < fields.length; i++) {
    const field = fields[i]

    if (!field.value || (field.dataset.type === 'email-input' && !isEmailValid(field.value))) {
      field.style.borderColor = 'red'
      field.nextElementSibling.classList.remove('hidden')

      isDataValid = false

    } else {
      field.style.borderColor = '#3d3d3d'
      field.nextElementSibling.classList.add('hidden')
    }
  }
  return isDataValid
}

export default validateData