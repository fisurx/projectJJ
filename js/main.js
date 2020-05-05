$(document).ready(function(){
    $(".galery").bxSlider({
        mode: "fade",
        caption: true,
        slideWidth: 1200
    })



    //post
    var contenido = "dasdasddewdewdewfokervjervernonerwjitnerwihgtb rer gherbferfoier fernfuienfuierbfhe weruberuit"
    var posts = [
        {
            title: "Prueba de titulo 0",
            date: "Publicado el " + moment().day() +" de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Deleniti laborum modi earum excepturi vel ab minus eius 
            eaque ducimus! Aut cumque quia aliquam aspernatur saepe 
            reprehenderit tempore nam non distinctio?`
        },

        {
            title: "Prueba de titulo 1",
            date: new Date(),
            content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Deleniti laborum modi earum excepturi vel ab minus eius 
            eaque ducimus! Aut cumque quia aliquam aspernatur saepe 
            reprehenderit tempore nam non distinctio?`
        },
        {
            title: "Prueba de titulo 2",
            date: new Date(),
            content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Deleniti laborum modi earum excepturi vel ab minus eius 
            eaque ducimus! Aut cumque quia aliquam aspernatur saepe 
            reprehenderit tempore nam non distinctio?`
        },
        {
            title: "Prueba de titulo 3",
            date: new Date(),
            content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Deleniti laborum modi earum excepturi vel ab minus eius 
            eaque ducimus! Aut cumque quia aliquam aspernatur saepe 
            reprehenderit tempore nam non distinctio?` 
        }
    ];

    posts.forEach((element, index) => {
        var post = `
            <article class="post">
            <h2>${element.title}</h2>
            <span class="date">${element.date}</span>
            <p>
                ${element.content}
            </p>
            <a class="button-more">Leer mas</a>
        `;

        $("#posts").append(post);
       });
       function themes(){
            var theme = $("#theme");
            
            $("#to-green").click(function(){
                theme.attr("href","css/green.css")
                color = theme.attr("href","css/green.css")
                window.localStorage.setItem("fondo", theme.attr("href"))
            })
    
            $("#to-red").click(function(){
                theme.attr("href","css/red.css")
                color = theme.attr("href","css/red.css")
                window.localStorage.setItem("fondo", theme.attr("href"))
            })
    
            $("#to-blue").click(function(){
                theme.attr("href","css/blue.css")
                color = theme.attr("href","css/blue.css")
                window.localStorage.setItem("fondo", theme.attr("href"))
            })

            if (window.localStorage.getItem("fondo") != undefined){
                theme.attr("href", window.localStorage.getItem("fondo"));
            }
       }

      themes();
      
})