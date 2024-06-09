import { waitUntil } from "@vercel/functions";

export const dynamic = 'force-dynamic';
export const maxDuration = 15;
 
export function GET(request: Request) {
  waitUntil(
    new Promise(
      resolve => setTimeout(() => {
        console.log("Hola tarde")
        return resolve
      }, 
      5000)
    )
  )
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}