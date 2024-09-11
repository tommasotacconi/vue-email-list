// Istanza di vue
const { createApp } = Vue

  createApp({
    data() {
      return {
        emails: [
          'primaemail@primaemail.com',
          'secondaemail@secondaiemail.com',
          'terzaemail@terzaemail.com'
        ],
        apriUrl: '',
      }
    },
    methods: {

    }
  }).mount('#app')
