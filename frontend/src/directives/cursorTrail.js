export default {
  mounted(el) {
    let particles = []
    let animationId
    let mouseX = 0
    let mouseY = 0

    // Create canvas element
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    // Set canvas styles
    canvas.style.position = 'fixed'
    canvas.style.top = '0'
    canvas.style.left = '0'
    canvas.style.pointerEvents = 'none'
    canvas.style.zIndex = '-1' // Paling bawah, tidak menutupi hover/tooltip
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Append canvas to body
    document.body.appendChild(canvas)

    // Particle class
    class Particle {
      constructor(x, y) {
        this.x = x
        this.y = y
        this.vx = (Math.random() - 0.5) * 2
        this.vy = (Math.random() - 0.5) * 2
        this.life = 1
        this.decay = 0.02
        this.number = Math.floor(Math.random() * 2) // Only 0 and 1
        this.size = Math.random() * 12 + 8
        this.color = `hsl(${Math.random() * 30 + 20}, 100%, 50%)` // Orange range
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.life -= this.decay
        this.vy += 0.1 // Gravity effect
      }

      draw(ctx) {
        ctx.save()
        ctx.globalAlpha = this.life
        ctx.fillStyle = this.color
        ctx.font = `${this.size}px 'Courier New', monospace`
        ctx.fillText(this.number.toString(), this.x, this.y)
        ctx.restore()
      }

      isDead() {
        return this.life <= 0
      }
    }

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY

      // Create new particles
      for (let i = 0; i < 1; i++) {
        particles.push(new Particle(mouseX, mouseY))
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles = particles.filter((particle) => {
        particle.update()
        particle.draw(ctx)
        return !particle.isDead()
      })

      animationId = requestAnimationFrame(animate)
    }

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Event listeners
    document.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)

    // Start animation
    animate()

    // Store cleanup function
    el._cursorTrailCleanup = () => {
      document.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas)
      }
    }
  },

  unmounted(el) {
    if (el._cursorTrailCleanup) {
      el._cursorTrailCleanup()
    }
  },
}
