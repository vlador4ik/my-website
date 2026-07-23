import { LayoutDashboard, ShoppingCart, Wallet } from 'lucide-vue-next';
import type { TProjectProps } from '~/types/projects/TProjectProps';

export const projects: TProjectProps[] = [
    {
        title: 'Gaming Platform Dashboard',
        description: 'Comprehensive admin dashboard for a gambling platform with real-time analytics, user management, and complex data visualizations. Built with Nuxt 3 and Pinia for state management.',
        technologies: ['Nuxt 3', 'TypeScript', 'Pinia', 'Chart.js', 'Tailwind'],
        gradient: 'from-zinc-700 via-zinc-800 to-zinc-900',
        icon: LayoutDashboard,
    },
    {
        title: 'E-Commerce Platform',
        description: 'Modern e-commerce solution with advanced product filtering, cart management, and checkout flow. Implemented performance optimizations resulting in 60% faster load times.',
        technologies: ['Vue 3', 'Vuetify', 'SCSS', 'REST API', 'Stripe'],
        gradient: 'from-pink-500 via-rose-500 to-red-500',
        icon: ShoppingCart,
    },
    {
        title: 'FinTech Payment App',
        description: 'Secure payment processing application with multi-currency support, transaction history, and compliance features. Focus on security and user experience.',
        technologies: ['Nuxt 3', 'TypeScript', 'Node.js', 'WebSockets', 'Auth0'],
        gradient: 'from-teal-700 via-cyan-800 to-slate-900',
        icon: Wallet,
    },
];
