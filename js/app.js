var app = new Vue({
    el: '#app',
    data: {
        tab_creditos: true,
        tab_dados: false,
        planos: {
            recarga: [],
            dados: []
        },
        aplicar_classe: 'header-creditos',
    },

    methods: {
        tabCreditos() {
            this.aplicar_classe = 'header-creditos';
            this.tab_dados = false;
            this.tab_creditos = true;
        },
        tabDados() {
            this.aplicar_classe = 'header-dados';
            this.tab_dados = true;
            this.tab_creditos = false;
        }
    },

    async beforeCreate() {
        try {
            let creditos = await (await fetch("https://tidal-hearing.glitch.me/recarga")).json();
            creditos.forEach(element => {
                this.planos.recarga.push(element);
            });

            let dados = await (await fetch("https://tidal-hearing.glitch.me/dados")).json();
            dados.forEach(element => {
                this.planos.dados.push(element);
            });

        } catch (err) {
            console.error(err);
        }
    },
});