import Vue from 'vue'
import VueRouter from 'vue-router'

function load(component) {
  // '@' is aliased to src/components
  return () => import(`@/layout/${component}.vue`)
}
function loadForm(component) {
  return () => import(`@/components/form/${component}.vue`)
}
function loadPages(component) {
  return () => import(`@/pages/${component}.vue`)
}
function loadFilms(component) {
  return () => import(`@/components/films/${component}.vue`)
}
function loadPopular(component) {
  return () => import(`@/components/popular/${component}.vue`)
}
function loadBloggers(component) {
  return () => import(`@/components/bloggers/${component}.vue`)
}
function loadCartoons(component) {
  return () => import(`@/components/cartoon/${component}.vue`)
}
function loadSerials(component) {
  return () => import(`@/components/serials/${component}.vue`)
}
function loadShou(component) {
  return () => import(`@/components/shou/${component}.vue`)
}
function loadSport(component) {
  return () => import(`@/components/sport/${component}.vue`)
}
function loadTv(component) {
  return () => import(`@/components/tv/${component}.vue`)
}

function loadViews(component) {
  return () => import(`@/views/${component}.vue`)
}



Vue.use(VueRouter)

let routes = []

if(sessionStorage.getItem('token') && sessionStorage.getItem('token') !== '') {
  routes = [
    {
      path: '/',
      component: {
        template: "<router-view></router-view>"
      },
      children: [
        {
          path: '/',
          name: 'MainLayout',
          component: load('MainLayout'),
          children: [
            {
              path: '',
              name: 'mainViewYkadri',
              component: loadViews('MainViewYkadri')
            },
            ////////////// popular

            // {
            //   path: 'populars',
            //   name: 'popularsFilm',
            //   component: loadPages('PopularsFilm'),
            // },
            {
              path: 'popular',
              name: 'popularsItem',
              component: loadPopular('PopularsItem')
            },
            {
              path: 'trailer',
              name: 'popularsTrailer',
              component: loadPopular('PopularsTrailer')
            },
            {
              path: 'movie',
              name: 'popularsPublicItem',
              component: loadPopular('PopularsPublicItem')
            },
            {
              path: 'actor',
              name: 'popularsActor',
              component: loadPopular('PopularsActor')
            },
            {
              path: 'video',
              name: 'popularsVideo',
              component: loadPopular('PopularsVideo')
            },

            ///////// films
            {
              path: 'films',
              name: 'moviesFilm',
              component: loadPages('MoviesFilm'),
            },
            {
              path: 'film',
              name: 'filmItem',
              component: loadFilms('MoviesItem')
            },
            {
              path: 'trailer',
              name: 'moviesTrailer',
              component: loadFilms('MoviesTrailer')
            },
            {
              path: 'movie',
              name: 'moviesPublicItem',
              component: loadFilms('MoviesPublicItem')
            },
            {
              path: 'actor',
              name: 'moviesActor',
              component: loadFilms('MoviesActor')
            },
            {
              path: 'video',
              name: 'moviesVideo',
              component: loadFilms('MoviesVideo')
            },

            ///////bloggers
            {
              path: 'bloggers',
              name: 'pageBloggers',
              component: loadPages('PageBloggers'),
            },
            {
              path: 'bloggers-card',
              name: 'bloggersItem',
              component: loadBloggers('BloggersItem')
            },
            {
              path: 'bloggers-trailer',
              name: 'bloggersTrailer',
              component: loadBloggers('BloggersTrailer')
            },
            {
              path: 'bloggers-public',
              name: 'bloggersPublicItem',
              component: loadBloggers('BloggersPublicItem')
            },
            {
              path: 'bloggers-actor',
              name: 'bloggersActor',
              component: loadBloggers('BloggersActor')
            },
            {
              path: 'bloggers-video',
              name: 'bloggersVideo',
              component: loadBloggers('BloggersVideo')
            },

/////// cartoons

            {
              path: 'cartoon',
              name: 'cartoonPage',
              component: loadPages('CartoonPage'),
            },
            {
              path: 'cartoon-card',
              name: 'cartoonsItem',
              component: loadCartoons('CartoonsItem')
            },
            {
              path: 'cartoons-trailer',
              name: 'cartoonsTrailer',
              component: loadCartoons('CartoonsTrailer')
            },
            {
              path: 'cartoons-public',
              name: 'cartoonsPublicItem',
              component: loadCartoons('CartoonsPublicItem')
            },
            {
              path: 'cartoon-actor',
              name: 'cartoonsActor',
              component: loadCartoons('CartoonsActor')
            },
            {
              path: 'cartoon-video',
              name: 'cartoonsVideo',
              component: loadCartoons('CartoonsVideo')
            },

///////// serials
            {
              path: 'serials',
              name: 'serialsPage',
              component: loadPages('SerialsPage'),
            },
            {
              path: 'serials-card',
              name: 'serialsItem',
              component: loadSerials('SerialsItem')
            },
            {
              path: 'serials-trailer',
              name: 'serialsTrailer',
              component: loadSerials('SerialsTrailer')
            },
            {
              path: 'serials-public',
              name: 'serialsPublicItem',
              component: loadSerials('SerialsPublicItem')
            },
            {
              path: 'serials-actor',
              name: 'serialsActor',
              component: loadSerials('SerialsActor')
            },
            {
              path: 'serials-video',
              name: 'serialsVideo',
              component: loadSerials('SerialsVideo')
            },

//////////shou
            {
              path: 'shou',
              name: 'pageShou',
              component: loadPages('PageShou'),
            },
            {
              path: 'shou-card',
              name: 'shouItem',
              component: loadShou('ShouItem')
            },
            {
              path: 'shou-trailer',
              name: 'shouTrailer',
              component: loadShou('ShouTrailer')
            },
            {
              path: 'shou-public',
              name: 'shouPublicItem',
              component: loadShou('ShouPublicItem')
            },
            {
              path: 'shou-actor',
              name: 'shouActor',
              component: loadShou('ShouActor')
            },
            {
              path: 'shou-video',
              name: 'shouVideo',
              component: loadShou('ShouVideo')
            },
/////// sports
            {
              path: 'sports',
              name: 'pageSport',
              component: loadPages('PageSport'),
            },
            {
              path: 'sports-card',
              name: 'sportItem',
              component: loadSport('SportItem')
            },
            {
              path: 'sport-trailer',
              name: 'sportTrailer',
              component: loadSport('SportTrailer')
            },
            {
              path: 'sports-public',
              name: 'sportPublicItem',
              component: loadSport('SportPublicItem')
            },
            {
              path: 'sports-actor',
              name: 'sportActor',
              component: loadSport('ActorSport')
            },
            {
              path: 'sport-video',
              name: 'sportVideo',
              component: loadSport('SportVideo')
            },

/////// tv
            {
              path: 'tv',
              name: 'pageTv',
              component: loadPages('PageTV'),
            },
            {
              path: 'tv-card',
              name: 'tvItem',
              component: loadTv('TvItem')
            },
            {
              path: 'tv-trailer',
              name: 'tvTrailer',
              component: loadTv('TvTrailer')
            },
            {
              path: 'tv-public',
              name: 'tvPublicItem',
              component: loadTv('TvPublicItem')
            },
            {
              path: 'tv-actor',
              name: 'tvActor',
              component: loadTv('ActorTv')
            },
            {
              path: 'tv-video',
              name: 'tvVideo',
              component: loadTv('TvVideo')
            },
          ]
        },

      ]
    }
  ]
} else  {
  routes = [
    {
      path: '/',
      component: {
        template: "<router-view></router-view>"
      },
      children: [
        {
          path: '/',
          name: 'LandingLayout',
          component: load('LandingLayout'),
          children: [
            {
              path: '',
              name: 'landingViewYkadri',
              component: loadViews('LandingViewYkadri')
            },
            ////////////// popular
            {
              path: 'popular',
              name: 'popularsItem',
              component: loadPopular('PopularsItem')
            },
            {
              path: 'trailer',
              name: 'popularsTrailer',
              component: loadPopular('PopularsTrailer')
            },
            {
              path: 'movie',
              name: 'popularsPublicItem',
              component: loadPopular('PopularsPublicItem')
            },
            {
              path: 'actor',
              name: 'popularsActor',
              component: loadPopular('PopularsActor')
            },
            {
              path: 'video',
              name: 'popularsVideo',
              component: loadPopular('PopularsVideo')
            },

//////////// films
            {
              path: 'films',
              name: 'moviesFilm',
              component: loadPages('MoviesFilm'),
            },
            {
              path: 'film',
              name: 'filmItem',
              component: loadFilms('MoviesItem')
            },
            {
              path: 'trailer',
              name: 'moviesTrailer',
              component: loadFilms('MoviesTrailer')
            },
            {
              path: 'movie',
              name: 'moviesPublicItem',
              component: loadFilms('MoviesPublicItem')
            },
            {
              path: 'actor',
              name: 'moviesActor',
              component: loadFilms('MoviesActor')
            },
            {
              path: 'video',
              name: 'moviesVideo',
              component: loadFilms('MoviesVideo')
            },

            ///bloggers
            {
              path: 'bloggers',
              name: 'pageBloggers',
              component: loadPages('PageBloggers'),
            },
            {
              path: 'bloggers-card',
              name: 'bloggersItem',
              component: loadBloggers('BloggersItem')
            },
            {
              path: 'bloggers-trailer',
              name: 'bloggersTrailer',
              component: loadBloggers('BloggersTrailer')
            },
            {
              path: 'bloggers-public',
              name: 'bloggersPublicItem',
              component: loadBloggers('BloggersPublicItem')
            },
            {
              path: 'bloggers-actor',
              name: 'bloggersActor',
              component: loadBloggers('BloggersActor')
            },
            {
              path: 'bloggers-video',
              name: 'bloggersVideo',
              component: loadBloggers('BloggersVideo')
            },

/////// cartoons

            {
              path: 'cartoon',
              name: 'cartoonPage',
              component: loadPages('CartoonPage'),
            },
            {
              path: 'cartoon-card',
              name: 'cartoonsItem',
              component: loadCartoons('CartoonsItem')
            },
            {
              path: 'cartoons-trailer',
              name: 'cartoonsTrailer',
              component: loadCartoons('CartoonsTrailer')
            },
            {
              path: 'cartoons-public',
              name: 'cartoonsPublicItem',
              component: loadCartoons('CartoonsPublicItem')
            },
            {
              path: 'cartoon-actor',
              name: 'cartoonsActor',
              component: loadCartoons('CartoonsActor')
            },
            {
              path: 'cartoon-video',
              name: 'cartoonsVideo',
              component: loadCartoons('CartoonsVideo')
            },

///////// serials
            {
              path: 'serials',
              name: 'serialsPage',
              component: loadPages('SerialsPage'),
            },
            {
              path: 'serials-card',
              name: 'serialsItem',
              component: loadSerials('SerialsItem')
            },
            {
              path: 'serials-trailer',
              name: 'serialsTrailer',
              component: loadSerials('SerialsTrailer')
            },
            {
              path: 'serials-public',
              name: 'serialsPublicItem',
              component: loadSerials('SerialsPublicItem')
            },
            {
              path: 'serials-actor',
              name: 'serialsActor',
              component: loadSerials('SerialsActor')
            },
            {
              path: 'serials-video',
              name: 'serialsVideo',
              component: loadSerials('SerialsVideo')
            },

//////////shou
            {
              path: 'shou',
              name: 'pageShou',
              component: loadPages('PageShou'),
            },
            {
              path: 'shou-card',
              name: 'shouItem',
              component: loadShou('ShouItem')
            },
            {
              path: 'shou-trailer',
              name: 'shouTrailer',
              component: loadShou('ShouTrailer')
            },
            {
              path: 'shou-public',
              name: 'shouPublicItem',
              component: loadShou('ShouPublicItem')
            },
            {
              path: 'shou-actor',
              name: 'shouActor',
              component: loadShou('ShouActor')
            },
            {
              path: 'shou-video',
              name: 'shouVideo',
              component: loadShou('ShouVideo')
            },
/////// sports
            {
              path: 'sports',
              name: 'pageSport',
              component: loadPages('PageSport'),
            },
            {
              path: 'sports-card',
              name: 'sportItem',
              component: loadSport('SportItem')
            },
            {
              path: 'sport-trailer',
              name: 'sportTrailer',
              component: loadSport('SportTrailer')
            },
            {
              path: 'sports-public',
              name: 'sportPublicItem',
              component: loadSport('SportPublicItem')
            },
            {
              path: 'sports-actor',
              name: 'sportActor',
              component: loadSport('ActorSport')
            },
            {
              path: 'sport-video',
              name: 'sportVideo',
              component: loadSport('SportVideo')
            },

/////// tv
            {
              path: 'tv',
              name: 'pageTv',
              component: loadPages('PageTV'),
            },
            {
              path: 'tv-card',
              name: 'tvItem',
              component: loadTv('TvItem')
            },
            {
              path: 'tv-trailer',
              name: 'tvTrailer',
              component: loadTv('TvTrailer')
            },
            {
              path: 'tv-public',
              name: 'tvPublicItem',
              component: loadTv('TvPublicItem')
            },
            {
              path: 'tv-actor',
              name: 'tvActor',
              component: loadTv('ActorTv')
            },
            {
              path: 'tv-video',
              name: 'tvVideo',
              component: loadTv('TvVideo')
            },
          ]
        },
        {
          path: 'login',
          name: 'FormAuth',
          component: loadForm('FormAuth'),
        },
        {
          path: 'recovery',
          name: "PasswordRecovery",
          component: loadForm('passwordRecovery')
        },

      ]
    },
  ]
}


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
