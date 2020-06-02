Vue.component('contador', {
    // Quando estivermos trabalhando com dados dentro de componentes nos precimos que 'data' seja uma function, pois para cada componente vai ser preciso retornar um novo
    // objeto e não compartilhar um mesmo objeto entre todos os componentes.
    data: function(){
        return {
            contador: 0
        }
    },
    methods: {
        add() {
            this.contador ++
        }
    },
    // Obseve no template que podemos colocar no @click tanto a chamada da funcao como podemos fazer uma pequena expressao diretamente entre as aspas.
    template: `
        <div>
            <span> {{ contador }} </span>
            <button @click="add"> Incrementar </button>
            <button @click="contador--"> Decrementar </button>
        </div>
    `
})

new Vue({
    el: "#app"
})