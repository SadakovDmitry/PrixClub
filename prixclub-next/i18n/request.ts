import {getRequestConfig} from 'next-intl/server'

export default getRequestConfig(async ({locale}) => {
  const l = locale ?? 'ru'
  return {
    messages: (await import(`../messages/${l}.json`)).default
  }
})
