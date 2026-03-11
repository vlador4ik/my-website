<template>
    <header class="p-4 relative">
        <div class="container mx-auto flex items-center justify-between">
            <button @click="toggleMenu" class="md:hidden flex items-center">
                <component :is="isMenuOpen ? X : Menu" :size="24" />
            </button>
            <nav>
                <ul class="hidden md:flex gap-8">
                    <li v-for="item in items" :key="item.label">
                        <a class="text-grey" :href="item.href">{{ item.label }}</a>
                    </li>
                </ul>
            </nav>
            <a href="#contact" class="text-base p-2 px-6  bg-gradient-to-r from-white/20 to-secondary rounded-full hover:scale-110 transition-transform" tabindex="0">
                <span class="text-white">Let's Talk</span>
            </a>
        </div>

        <!-- Mobile animated menu -->
        <div class="mobile-menu-wrap md:hidden">
            <ul class="mobile-menu" :class="{open: isMenuOpen}">
                <li v-for="(item, i) in items" :key="item.label" :style="itemStyle(i)">
                    <a @click="toggleMenu" :href="item.href">{{ item.label }}</a>
                </li>
            </ul>
        </div>
    </header>
</template>

<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next';
const isMenuOpen = ref(false);
const items = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#about' },
    { label: 'Experience', href: '#about' },
    { label: 'Projects', href: '#about' },
    { label: 'Contact', href: '#about' },
];
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
}

const itemStyle = (i: number) => ({
    transitionDelay: isMenuOpen.value ? `${i * 60}ms` : '0ms',
});
</script>

<style lang="scss">
    .mobile-menu-wrap {
        position: absolute;
        left: 0;
        right: 0;
        top: 100%;
        z-index: 40;
        display: flex;
        justify-content: center;
        pointer-events: none;
    }

    .mobile-menu {
        width: 100%;
        max-width: 42rem;
        background: white;
        box-shadow: 0 8px 24px rgba(15,23,42,0.08);
        border-radius: 12px;
        transform-origin: top center;
        transform: scaleY(0);
        opacity: 0;
        transition: transform 320ms cubic-bezier(.2,.9,.2,1), opacity 220ms ease;
        overflow: hidden;
        pointer-events: none;
        padding: 0.5rem 0;
        margin: 0.5rem 1rem;
    }

    .mobile-menu.open {
        transform: scaleY(1);
        opacity: 1;
        pointer-events: auto;
    }

    .mobile-menu li {
        list-style: none;
        padding: 0.75rem 1.25rem;
        opacity: 0;
        transform: translateY(-6px);
        transition: transform 260ms ease, opacity 260ms ease;
    }

    .mobile-menu.open li {
        opacity: 1;
        transform: translateY(0);
    }

</style>