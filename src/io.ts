export default (cb: () => void, options: object) =>
  new IntersectionObserver(([entry], observer) => {
    if (entry.intersectionRatio > 0) {
      observer.unobserve(entry.target)

      cb()
    }
  }, options)
