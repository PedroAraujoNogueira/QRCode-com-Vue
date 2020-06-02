new Vue({
    el: '#desafio',
    data: {
        valor: 0
    }, computed:{
        resultado(){
            return this.valor == 37 ? 'Valor igual.' : 'Valor diferente.'
        }
    },
    watch: {
        // Podemos monitorar tmb uma variavel computada.
        resultado(){
            setTimeout(() => {
                return this.valor = 0
            }, 5000)
        }
    }
});