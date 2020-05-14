$(document).ready(function () {

    //Slider from index

    if (window.location.href.indexOf("index") > -1) {
        $(".galery").bxSlider({
            mode: "fade",
            caption: true,
            slideWidth: 1200
        })
    }



    //post
    if (window.location.href.indexOf("index") > -1) {
        alert(document.domain);

        var posts = [
            {
                title: "Prueba de titulo 0",
                date: "Publicado el " + moment().day() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
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
    }


    function themes() {
        var theme = $("#theme");

        $("#to-green").click(function () {
            theme.attr("href", "css/green.css")
            color = theme.attr("href", "css/green.css")
            window.localStorage.setItem("fondo", theme.attr("href"))
        })

        $("#to-red").click(function () {
            theme.attr("href", "css/red.css")
            color = theme.attr("href", "css/red.css")
            window.localStorage.setItem("fondo", theme.attr("href"))
        })

        $("#to-blue").click(function () {
            theme.attr("href", "css/blue.css")
            color = theme.attr("href", "css/blue.css")
            window.localStorage.setItem("fondo", theme.attr("href"))
        })

        if (window.localStorage.getItem("fondo") != undefined) {
            theme.attr("href", window.localStorage.getItem("fondo"));
        }
    }

    themes();


    //Scroll to the up side of the page
    $(".subir").click(function (e) {
        e.preventDefault(e);

        $("html, body").animate({
            scrollTop: 0
        }, 500); //500milisegundos

        return false;
    })

    $(".login form").submit(function () {
        var formName = $("#inputName").val();

        localStorage.setItem("formName", formName);
    });

    var localName = localStorage.getItem("formName");

    if (localName != null && localName != "undefined") {
        var aboutp = $("#about p");

        aboutp.html("<br><strong>Welcome, " + localName + "</strong>");
        aboutp.append(`<a href="#" id="logout">Close session</a>`);

        $(".login").hide();

        $("#logout").click(function () {
            localStorage.clear();
            location.reload();
        })
    }

    // WATHC.HTML
    setInterval(function () {
        reloj = moment().format("h:mm:ss a");
        $("#reloj").html(reloj);
    }, 1000)



    // VALIDATION CONTACT FORM


    console.log("Paso 0");
    $("#bSend").click(function () {

        var form_contact = $("#formContact").val();
        var nombre = $("#contactName").val();
        var asunto = $("#contactAffair").val();
        var email = $("#contactEmail").val();
        campos = [nombre, asunto, email];


        console.log("Paso 1");
        const inc = [];
        campos.forEach(element => {
            if (element == "") {
                inc.push(element);
            }
        });

        if (inc.length == 1) {
            let campo = String;

            function getPlace(array, search){
                place = array.indexOf(search);
                return place
            };
            

            lugar = getPlace(campos, "");
            console.log(lugar); 
            if (lugar == 0) {
                campo = "nombre";
            };
            if (lugar == 1) {
                campo = "asunto";
            };
            if (lugar == 2){
                campo = "email";        
            };

            alert("El campo " + campo + " se encuentra incompleto")
            return false;
        };
            
        if (inc.length > 1) {
            alert("Se deben completar todos los campos");
        };
   

    });

})