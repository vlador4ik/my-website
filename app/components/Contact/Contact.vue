<template>
    <section id="contact" aria-labelledby="contact-title" class="container mx-auto px-4 my-16">
        <h2 id="contact-title" class="section-title">Let's Connect</h2>
        <p class="section-subtitle max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
        </p>
        <p class="text-2xl sm:text-3xl text-primary font-semibold text-center mt-6">
            Let's build something great together.
        </p>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 max-w-6xl mx-auto">
            <div class="flex flex-col">
                <h3 class="text-2xl font-bold text-white mb-4">Get in Touch</h3>
                <p class="text-muted-foreground leading-relaxed mb-6">
                    Whether you're looking to hire, collaborate, or just want to say hi, feel free to reach out.
                    I'm always open to discussing new projects and opportunities.
                </p>

                <div class="flex flex-col gap-3">
                    <ContactMethod
                        v-for="method in contactMethods"
                        :key="method.label"
                        :icon="method.icon"
                        :label="method.label"
                        :value="method.value"
                        :href="method.href"
                        class="scroll-reveal-child"
                    />
                </div>

                <div class="mt-6 flex items-center gap-3 p-4 bg-card/40 backdrop-blur-sm border border-grey/20 rounded-2xl">
                    <span class="relative inline-flex h-2.5 w-2.5">
                        <span class="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-60"></span>
                        <span class="relative inline-block w-2.5 h-2.5 rounded-full bg-green-500"></span>
                    </span>
                    <span class="text-sm text-foreground/80">Available for freelance opportunities</span>
                </div>
            </div>

            <ContactForm />
        </div>
    </section>
</template>

<script lang="ts" setup>
import ContactMethod from '~/components/Contact/ContactMethod.vue';
import ContactForm from '~/components/Contact/ContactForm.vue';
import { contactMethods } from '~/data/contactMethods';
</script>
