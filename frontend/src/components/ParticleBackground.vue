<template>
  <div class="particle-background" ref="particleContainer">
    <div id="particles-js" class="particles-canvas"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const particleContainer = ref(null)

// Particles.js configuration
const particlesConfig = {
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
      value: 0.6,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
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
      color: '#ffffff',
      opacity: 0.7,
      width: 1,
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

onMounted(() => {
  // Load particles.js script dynamically
  const script = document.createElement('script')
  script.src = '/particles.min.js'
  script.onload = () => {
    // Initialize particles.js when script is loaded
    if (window.pJSDom && window.pJSDom.length > 0) {
      // Destroy existing instance if any
      window.pJSDom[0].pJS.fn.vendors.destroypJS()
      window.pJSDom = []
    }

    // Load particles with our configuration
    window.particlesJS('particles-js', particlesConfig)
  }
  document.head.appendChild(script)
})

onUnmounted(() => {
  // Clean up particles.js instance
  if (window.pJSDom && window.pJSDom.length > 0) {
    window.pJSDom[0].pJS.fn.vendors.destroypJS()
    window.pJSDom = []
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
}

#particles-js {
  width: 100%;
  height: 100%;
  background: transparent;
}
</style>
