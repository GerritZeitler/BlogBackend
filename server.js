import express from 'express'
import cors from 'cors'
import multer from 'multer'
import morgan from 'morgan'

import { addBeitrag, getBeitraege } from './controller/BeitragController.js'

const PORT = 9898
const app = express()

const upload = multer({ dest: './puplic' })

app.use(morgan('dev'))
app.use('/public', express.static('public'))
app.use(cors())

app.get('/beitraege', getBeitraege)
app.post('/beitraege', upload.single('beitragsbild'), addBeitrag)

app.listen(PORT, () => console.log('Er weiß nicht was er tut'))