import { headers } from 'next/headers'
 
export async function GET(request) {
  const headersList = headers()
  const referer = headersList.get('referer')
 
  return new Response('Hello, Next.js! 2', {
    status: 200,
    headers: { referer: referer },
  })
}