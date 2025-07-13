<template>
  <div class="particle-background" ref="particleContainer">
    <div id="particles-js" class="particles-canvas"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const particleContainer = ref(null)

// Function to detect dark mode using Tailwind CSS class
function isDarkMode() {
  return document.documentElement.classList.contains('dark')
}

// Function to get current configuration based on mode
function getCurrentConfig() {
  const isDark = isDarkMode()
  console.log(`Current mode: ${isDark ? 'DARK' : 'LIGHT'}`)
  console.log(`Line color will be: ${isDark ? '#ffffff' : '#ea580c'}`)

  return {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: ['#ffffff', '#fef3c7', '#fed7aa', '#fdba74', '#fb923c', '#ea580c'],
      },
      shape: {
        type: ['circle', 'triangle', 'square', 'polygon'],
        stroke: {
          width: 0,
          color: '#000000',
        },
        polygon: {
          nb_sides: 6,
        },
      },
      opacity: {
        value: isDark ? 0.3 : 0.3,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: isDark ? 2 : 2,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: isDark ? '#ffffff' : '#ea580c',
        opacity: isDark ? 0.2 : 0.2,
        width: isDark ? 1 : 1,
      },
      move: {
        enable: true,
        speed: 3,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
        onclick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 0.8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  }
}

// Function to initialize particles
function initializeParticles() {
  const config = getCurrentConfig()

  // Destroy existing instance if any
  if (window.pJSDom && window.pJSDom.length > 0) {
    window.pJSDom[0].pJS.fn.vendors.destroypJS()
    window.pJSDom = []
  }

  // Initialize particles with current configuration
  if (typeof window.particlesJS === 'function') {
    window.particlesJS('particles-js', config)
    console.log(`Particles initialized in ${isDarkMode() ? 'dark' : 'light'} mode`)
  }
}

// Function to update particles when mode changes
function updateParticlesForMode() {
  initializeParticles()
}

onMounted(() => {
  // Load particles.js script dynamically
  const script = document.createElement('script')
  script.src = '/particles.min.js'
  script.onload = () => {
    // Wait for DOM to be ready
    setTimeout(() => {
      initializeParticles()

      // Listen for class changes on html element
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            updateParticlesForMode()
          }
        })
      })

      // Start observing
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class'],
      })

      // Store observer for cleanup
      particleContainer.value._observer = observer
    }, 200)
  }
  script.onerror = () => {
    console.error('Failed to load particles.js script')
  }
  document.head.appendChild(script)
})

onUnmounted(() => {
  // Clean up particles.js instance
  if (window.pJSDom && window.pJSDom.length > 0) {
    window.pJSDom[0].pJS.fn.vendors.destroypJS()
    window.pJSDom = []
  }

  // Clean up observer
  if (particleContainer.value && particleContainer.value._observer) {
    particleContainer.value._observer.disconnect()
  }
})
</script>

<style scoped>
.particle-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
}

.particles-canvas {
  width: 100%;
  height: 100%;
  pointer-events: auto;
}

#particles-js {
  width: 100%;
  height: 100%;
  background: transparent;
}
</style>
