new Vue({
    el: "#desafio", 
    data: {
        nome: "Pedro Araújo Nogueira",
        idade: 23,
        imagem: "http://files.cod3r.com.br/curso-vue/vue.jpg"
    },
    methods: {
        triplo(){
            return this.idade*3
        },
        numeroAleatorio(){
            return Math.random()
        }
    }
})