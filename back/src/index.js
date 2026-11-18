import 'dotenv/config'
import express from 'express'
import authRouter from './auth.js'

const app = express()
app.use(express.json())


app.get('/api/health', (req, res) => res.json({ ok: true }))
app.use('/api/auth', authRouter)

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`API sur http://localhost:${port}`))