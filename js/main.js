const { createApp } = Vue;
createApp({
    data(){
        return {
            message: "Buongiornissimooo!!!!",
            imageURL: 'https://www.lebelleimmagini.it/wp-content/uploads/2020/09/Immagini-di-Buongiorno-nuove-9.jpg',
            text_center: "text_center",
            flex: "flex",
            img_size: "img_size"
          };
    }
}).mount('#app')