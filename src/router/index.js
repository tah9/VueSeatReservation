import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        component: () => import('../Guide/Login')
    }, {
        path: '/register',
        component: () => import('../Guide/Register')
    }, {
        path: '/admin',
        component: () => import('../admin/Main'),
        children: [
            {
                path: 'announce',
                component: () => import('../admin/AnnounceManagement')
            }, {
                path: 'forum',
                component: () => import('../admin/ForumManagement')
            }, {
                path: 'seat',
                component: () => import('../admin/SeatManagement'),
                children: [
                    {
                        path: "number",
                        component: () => import('../admin/SeatNumber')
                    },
                    {
                        path: "crud",
                        component: () => import('../admin/SeatCrud')
                    }
                ]
            }, {
                path: 'student',
                component: () => import('../admin/StudentManagement')
            }, {
                path: 'teacher',
                component: () => import('../admin/TeacherManagement')
            },
        ]
    }, {
        path: '/StudentReservation',
        component: () => import('../user/Reservation')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
