<template>
    <form
        class="p-6 sm:p-8 bg-card backdrop-blur-sm border border-grey/20 rounded-3xl flex flex-col gap-5"
        @submit.prevent="handleSubmit"
    >
        <label class="flex flex-col gap-2">
            <span class="text-sm font-medium text-white">Name</span>
            <span class="relative block">
                <User :size="18" class="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                <input
                    v-model="name"
                    type="text"
                    required
                    placeholder="Your name"
                    class="w-full pl-11 pr-4 py-3 bg-card/60 border border-grey/20 rounded-xl text-white placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary/60 transition-colors"
                />
            </span>
        </label>

        <label class="flex flex-col gap-2">
            <span class="text-sm font-medium text-white">Email</span>
            <span class="relative block">
                <Mail :size="18" class="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                <input
                    v-model="email"
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    class="w-full pl-11 pr-4 py-3 bg-card/60 border border-grey/20 rounded-xl text-white placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary/60 transition-colors"
                />
            </span>
        </label>

        <label class="flex flex-col gap-2">
            <span class="text-sm font-medium text-white">Message</span>
            <span class="relative block">
                <MessageSquare :size="18" class="absolute left-4 top-4 text-muted-foreground" aria-hidden="true" />
                <textarea
                    v-model="message"
                    required
                    rows="5"
                    placeholder="Tell me about your project..."
                    class="w-full pl-11 pr-4 py-3 bg-card/60 border border-grey/20 rounded-xl text-white placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary/60 transition-colors resize-none"
                ></textarea>
            </span>
        </label>

        <button
            type="submit"
            class="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white rounded-xl font-semibold hover:scale-[1.02] transition-transform"
        >
            <Send :size="18" />
            <span>Send Message</span>
        </button>
    </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { User, Mail, MessageSquare, Send } from 'lucide-vue-next';

const name = ref('');
const email = ref('');
const message = ref('');

const handleSubmit = () => {
    const subject = encodeURIComponent(`Message from ${name.value}`);
    const body = encodeURIComponent(`${message.value}\n\n— ${name.value} (${email.value})`);
    window.location.href = `mailto:vlad_horob@ukr.net?subject=${subject}&body=${body}`;
};
</script>
