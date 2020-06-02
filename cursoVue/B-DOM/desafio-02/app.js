new Vue({
    el: '#desafio',
    data: {
        valor: '',
        valor2: ''
    },
    methods: {
        exibirAlerta(){
            alert("Opa, você me clicou.")
        },
        armazenaValor(event){
            this.valor = event.target.value
        },
        armazenaValor2(event){
            this.valor2 = event.target.value
        }
    }
})