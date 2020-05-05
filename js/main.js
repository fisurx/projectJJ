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
       /*<article class="post">
            <h2>Prueba de titulo</h2>
            <span class="date">Fecha de publicacion</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Deleniti laborum modi earum excepturi vel ab minus eius 
                eaque ducimus! Aut cumque quia aliquam aspernatur saepe 
                reprehenderit tempore nam non distinctio?
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Deleniti laborum modi earum excepturi vel ab minus eius 
                eaque ducimus! Aut cumque quia aliquam aspernatur saepe 
                reprehenderit tempore nam non distinctio?
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Deleniti laborum modi earum excepturi vel ab minus eius 
                eaque ducimus! Aut cumque quia aliquam aspernatur saepe 
                reprehenderit tempore nam non distinctio?
            </p>
            
            <a class="button-more">Leer mas</a>

        </article>*/
        
 



    console.log(posts);

    
})