export function useLocalizedRoutes() {
  const localePath = useLocalePath()
  return computed(() => ({
    home: localePath({ name: 'index' }),
    veicoli: localePath({ name: 'veicoli' }),
    tour: localePath({ name: 'tour' }),
    corsi: localePath({ name: 'corsi' }),
    chiSiamo: localePath({ name: 'chi-siamo' }),
    contatti: localePath({ name: 'contatti' })
  }))
}
