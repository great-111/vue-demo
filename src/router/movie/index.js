export default {
  path: '/movie',
  component: () => import('@/views/Movie'),
  children: [
    {
      path: 'city',
      component: () => import('@/components/City')
    },
    {
      path: 'search',
      component: () => import('@/components/Search')
    },
    {
      path: 'comingsoon',
      component: () => import('@/components/ComingSoon')
    },
    {
      path: 'nowplaying',
      component: () => import('@/components/NowPlaying')
    },
    {
      path: '/movie',
      redirect: '/movie/nowplaying'
    }
  ]
}
