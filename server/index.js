import express from 'express'

const app = express()
const PORT = 3000

app.get('/api/user', (req, res) => {
  res.send({
    name: 'chen',
    url: 'www.baidu.com'
  })
})

app.listen(PORT, () => {
  console.log('the server start ...')
})
