import express from 'express'

const PORT = 8080

const app = express()

app.get('*', (req, res) => {
  res.json({
    data: 'succeed',
  })
})

app.listen(PORT)
console.log(`Running on http://localhost:${PORT}/ 🎉`) // eslint-disable-line
