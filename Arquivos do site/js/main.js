jQuery(document).ready(function ($) {
    //fixar o header.. adicionando e removendo class
    window.onscroll = function () {
        if (window.pageYOffset > 140) {
            $('#header').addClass("active");
        } else {
            $('#header').removeClass("active");
        }
    }

    //ISOTOPE

    let btns = $("#tiras .button-group button");

    btns.click(function (e) {
        $("#tiras .button-group button").removeClass("active");
        e.target.classList.add("active"); //adicionar a classe active onde estiver selecionado

        let selector = $(e.target).attr("data-filter");
        $("#tiras .grid").isotope({
            filter: selector,
        });
    });

    // quando a tela carregar precisamos deixar o filtro em todos
    $(window).on("load", function () {
        $("tiras ;grid").isotope({
            filter: "*" // todos,
        });
    });

    //MAGNIFIC POPUP

    $(".grid .popup-link").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
            tPrev: "Anterior",
            tNext: "Proxima",
            tCounter: "%curr% de %total%",
        },
    });

    $('#btnEnviar').click(function () {
        if ($("#idNome").val() == "") {
            window.alert("Obrigatório digitar o nome");
        } else {
            var valor = 0;
            //Executa Loop entre todas as Radio buttons com o name de valor
            $('input:radio[name=alternativas1]').each(function () {
                //Verifica qual está selecionado
                if ($(this).is(':checked'))
                    valor = valor + parseFloat($(this).val());
            })
            $('input:radio[name=alternativas2]').each(function () {
                //Verifica qual está selecionado
                if ($(this).is(':checked'))
                    valor = valor + parseFloat($(this).val());
            })
            $('input:radio[name=alternativas3]').each(function () {
                //Verifica qual está selecionado
                if ($(this).is(':checked'))
                    valor = valor + parseFloat($(this).val());
            })
            $('input:radio[name=alternativas4]').each(function () {
                //Verifica qual está selecionado
                if ($(this).is(':checked'))
                    valor = valor + parseFloat($(this).val());
            })
            $('input:radio[name=alternativas5]').each(function () {
                //Verifica qual está selecionado
                if ($(this).is(':checked'))
                    valor = valor + parseFloat($(this).val());
            })
            $('input:radio[name=alternativas6]').each(function () {
                //Verifica qual está selecionado
                if ($(this).is(':checked'))
                    valor = valor + parseFloat($(this).val());
            })

            valor = valor + 0.4;

            var nome = ($("#idNome").val())

            if (valor > 5) {
                $("#idDescResultado").text("NOTA = " + valor)
                $("#idDescFeedback").text("PARABÉNS " + nome)
            } else {
                $("#idDescResultado").text("NOTA = " + valor)
                $("#idDescFeedback").text("VOLTE PARA A PÁGINA INICIAL E ESTUDE MAIS ")
            }

        }
    })


    /* function ValidarEntradas() {
         if (document.querySelector("input[name = 'alternativas']:checked") == null) {
             window.alert("Obrigatorio escolher uma resposta"); // Submit na classe para preencher campo obrigatorio
             return false;
         }
         if (document.getElementById("idNome").value == "") {
             window.alert("Obrigatorio digitar o nome");
         } else {
             return true;
             //return document.querySelector("input[name = 'pacotes']:checked").value // em js podemos retornar varios tipos
         }
     }*/


    // CARROSSEL

    /* $("#setaEsquerda").text("<")
     $("#setaDireita").text(">")

     let arrayImg = ["/assets/img/img1.jpg", "/assets/img/img2.jpg", "/assets/img/img3.jpg"]
     var i = 0;

     $("#setaEsquerda").click(function(){
         trocar(-1) //se está na 2°imagem - indice é 1, então decrementa vai para 0.
     })
     $("#setaDireita").click(function(){
         trocar(1)
     })

     function trocar(operacao)
     {
         i = i + operacao; //i+=operacao
         
         if(i < 0)
         {
             i = (arrayImg.length - 1);
         }
         else if(i > (arrayImg.length - 1))
         {
             i = 0;
         }

         $("#slide").attr({"src": arrayImg[i]}) // pegando a imagen do array selecionado no momento.
     }*/
});