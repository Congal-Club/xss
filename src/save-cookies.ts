import fs from 'fs'

export function saveCookies(ip: string, cookies: string) {
  let data: Record<string, string> = {}

  try {
    data = JSON.parse(fs.readFileSync('cookies.json', 'utf-8'))
  } catch (error) {
    console.log('El archivo cookies.json no existe o está vacío. Se creará uno nuevo.')
  }

  data[ip] = cookies

  fs.writeFileSync('cookies.json', JSON.stringify(data, null, 2))

  console.log(`Cookies guardadas para la IP ${ip}: ${cookies}`)
}
