import Vue from 'vue'
import Router from 'vue-router'
import Post from './components/Post'
import NotFound from './components/NotFound'
import Administrador from './components/Administrador'
import Avanzado from './components/Avanzado'
import Total from './components/Total'

Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: () => import('./components/Inicio.vue'),
        },
        {
            path: '/home',
            redirect: '/'
        },
        {
            path: '/inicio',
            redirect: '/' 
        },
        {
            path: '/portada',
            redirect: '/'
        },
        {
            path: '/sobremi',
            name: 'sobremi',
            component: () => import('./components/SobreMi.vue'),
            alias: ['/acerca']
        },
        {
            path: '/contacto',
            name: 'contacto',
            component: () => import('./components/Contacto.vue'),
            alias: ['/contactame']
        },
        {
            path: '/post',
            name: 'post',
            component: Post,
            children: [
                {
                    path: ':articulo',
                    component: () => import('./components/Articulo.vue'),
                }
            ]
        },
        {
            path: '/administrador',
            name: 'administrador',
            component: Administrador,
            children: [
                {
                    path: 'simple',
                    component: Total
                },
                {
                    path: 'avanzado',
                    component: Avanzado

                }
            ]

        },
        {
            path: '*',
            component: NotFound
        }
    ]
})