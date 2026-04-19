interface ScrollRevealTarget {
  $el: HTMLElement
}

interface ScrollRevealOptions {
  threshold?: number
  stagger?: boolean
  staggerDelay?: number
}

export function useScrollReveal(
  target: Ref<ScrollRevealTarget | HTMLElement | null>,
  options: ScrollRevealOptions = {}
) {
  const { threshold = 0.2, stagger = false, staggerDelay = 100 } = options

  onMounted(() => {
    const raw = target.value
    if (!raw) return
    const el = '$el' in raw ? raw.$el : raw

    el.classList.add('scroll-reveal')

    if (stagger) {
      Array.from(el.querySelectorAll<HTMLElement>('.scroll-reveal-child'))
        .forEach((child, i) => { child.style.transitionDelay = `${i * staggerDelay}ms` })
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) {
        el.classList.add('scroll-reveal--visible')
        observer.disconnect()
      }
    }, { root: null, threshold })

    observer.observe(el)
    onUnmounted(() => observer.disconnect())
  })
}
