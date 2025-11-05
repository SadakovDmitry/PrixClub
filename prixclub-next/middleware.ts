import { NextResponse } from 'next/server'

const locales = ['ru', 'en'] as const
const defaultLocale = 'ru'

export function middleware(req: Request) {
  const url = new URL(req.url)

  // Skip Next.js internals and static assets
  if (
    url.pathname.startsWith('/_next') ||
    url.pathname.startsWith('/api') ||
    url.pathname.startsWith('/favicon') ||
    url.pathname.startsWith('/assets') ||
    url.pathname.match(/\.[a-zA-Z0-9]+$/)
  ) {
    return NextResponse.next()
  }

  const [, maybeLocale] = url.pathname.split('/')
  const hasLocale = locales.includes(maybeLocale as any)

  if (!hasLocale) {
    url.pathname = `/${defaultLocale}${url.pathname}`
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
}
