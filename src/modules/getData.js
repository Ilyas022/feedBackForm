const getData = async () => {
  try {
    const res = await fetch('http://localhost:9090/api/registration', {
      method: 'Post'
    })
    
    const data = await res.json()
    return data
  } catch (error) {
    return error
  }
}

export default getData