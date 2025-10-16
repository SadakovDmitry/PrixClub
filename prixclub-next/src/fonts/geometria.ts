import localFont from 'next/font/local'

export const geometria = localFont({
  src: [
    { path: './Geometria/geometria_light.otf', weight: '300', style: 'normal' },
    { path: './Geometria/geometria_medium.otf', weight: '500', style: 'normal' },
    { path: './Geometria/geometria_bold.otf', weight: '700', style: 'normal' },
    { path: './Geometria/geometria_extrabold.otf', weight: '800', style: 'normal' },
  ],
  display: 'swap',
})
