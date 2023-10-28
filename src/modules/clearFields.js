const clearFields = (fields) => {
  for (let i = 0; i < fields.length; i++) {
    const field = fields[i]
    field.value = ''

  }
}

export default clearFields