<template>
    <footer class="border-t border-grey/20 mt-16">
        <div class="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
                <p class="text-2xl font-bold text-primary">Vlad Horobets</p>
                <p class="text-sm text-muted-foreground mt-2 max-w-xs">
                    Senior Front-End Developer crafting exceptional digital experiences.
                </p>
            </div>

            <nav aria-label="Footer">
                <h2 class="text-white font-semibold mb-4">Quick Links</h2>
                <ul class="flex flex-col gap-2 list-none">
                    <li v-for="item in navItems" :key="item.href">
                        <a
                            :href="item.href"
                            class="text-muted-foreground hover:text-primary transition-colors"
                        >{{ item.label }}</a>
                    </li>
                </ul>
            </nav>

            <div>
                <h2 class="text-white font-semibold mb-4">Connect</h2>
                <ul class="flex gap-3 list-none">
                    <li v-for="social in socials" :key="social.url">
                        <a
                            :href="social.url"
                            :aria-label="social.label"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="p-2 bg-card/50 backdrop-blur-sm border border-grey/40 rounded-full text-muted-foreground hover:text-primary hover:border-primary/50 hover:scale-110 transition inline-flex"
                        >
                            <component :is="social.component" :size="18" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="border-t border-grey/20">
            <div class="container mx-auto px-4 py-6 flex flex-col sm:flex-row gap-3 items-center justify-between text-sm text-muted-foreground">
                <p class="inline-flex items-center gap-1.5">
                    <span>&copy; {{ year }} Made with</span>
                    <Heart :size="14" class="fill-red-500 text-red-500" aria-hidden="true" />
                    <span>by Vlad Horobets</span>
                </p>
                <p>Built with Nuxt, TypeScript &amp; Tailwind CSS</p>
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
import { Heart } from 'lucide-vue-next';
import { navItems } from '~/data/navigation';
import { socials } from '~/data/socials';

const year = new Date().getFullYear();
</script>
