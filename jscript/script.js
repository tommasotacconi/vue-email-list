// Istanza di vue
const { createApp } = Vue

  createApp({
    data() {
      return {
        emails: [
        ],
        apriUrl:'https://flynn.boolean.careers/exercises/api/random/mail',
      }
    },
    methods: {
      getRandomEmail () {
        // 10 richieste di email
        for (let i = 0; i < 10; i++) {
          axios.get(this.apriUrl)
          .then((response) => {
            // Inserisco la parte di risposta che mi interessa in una const
            const result = response.data.response;
            console.log(result);
            // Aggiungo il risultato in un array nei data di vue
            this.emails.push(result);
          })
        }
      },
    },
    mounted () {
      this.getRandomEmail();
    }
  }).mount('#app')
