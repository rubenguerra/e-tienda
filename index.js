$(document).ready(function () {
  // Banner owl carousel
  $("#banner-area .owl-carousel").owlCarousel({
    dots: true,
    items: 1,
  });

  // Más vendidos
  $("#top-sale .owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  // Filtro Isotope
  var $grid = $(".grid").isotope({
    itemSelector: ".grid-item",
    layoutMode: "fitRows",
  });

  // Filtrar items con un click del boton
  $(".button-group").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });

  // Nuevos teléfonos
  $("#new-phones .owl-carousel").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  // Carrusel blog

  $("#blogs .owl-carousel").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
    },
  });

  // Sección de cantidad del producto
  let $qty_up = $(".qty .qty-up");
  let $qty_down = $(".qty .qty-down");
  // let $input = $(".qty .qty_input");

  // Click botón cantidad arriba
  $qty_up.click(function (e) {
    let $input = $(`.qty_input[data-id='${$(this).data("id")}']`);
    let $precio = $(`.product_price[data-id='${$(this).data("id")}']`);

    //Cambio de precio del producto usando llamada ajax
    $.ajax({
      uri: "plantillas/ajax.php",
      type: "post",
      data: { itemid: $(this).data("id") },
      success: function (result) {
        let obj = JSON.parse(result);
        let item_precio = obj[0]["item_precio"];

        if ($input.val() >= 1 && $input.val() <= 9) {
          $input.val(function (i, oldval) {
            return ++oldval;
          });
        }

        //Incremento de precio del producto debido a la cantidad
        $precio.text(parseInt(item_precio * $input.val()).toFixed(2));
      },
    }); //Cierre de requerimiento ajax
  });

  // Click botón cantidad baja
  $qty_down.click(function (e) {
    let $input = $(`.qty_input[data-id='${$(this).data("id")}']`);
    if ($input.val() > 1 && $input.val() <= 10) {
      $input.val(function (i, oldval) {
        return --oldval;
      });
    }
  });
});
