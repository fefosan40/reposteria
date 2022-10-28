let catalogo = $("#catalogo")
let productos = []
let producto = ""
let carrito = []
let cantidadItems = $("#cantidadItems")
let jsonProductos = []
let encabezado = $(".navbar")


function armarCatalogo() {
    $.ajax({
      url: "js/reposteria.json",
      dataType: "json",
      success: function (response) {
        jsonProductos = response
        jsonProductos.forEach((reposteria) => {
          producto = `<div class="col-md-4">
                        <div class="card mb-4 shadow-sm" >
                          <img src=${reposteria.img} alt="" class="card-img-top">
                          <hr/>
                          <div class="card-body">
                            <p class="card-text text-center"><strong>${reposteria.linea.toUpperCase()}</strong></p>
                            <p class="card-text text-center">${zonaFinca(reposteria)}</p>
                            <p class="card-text text-center"> ${reposteria.varietal}</p>
                            <p class="card-text text-center font-weight-bold">$ ${new Intl.NumberFormat("de-DE").format(reposteria.precio)}</p>
                            <div class="d-flex justify-content-center align-items-center">
                              <button type="button" class="btn btn-sm btn-outline-secondary" id= ${reposteria.id} onclick="agregoProductos2(${reposteria.id})">Agregar</button>
                            </div>
                          </div>
                        </div>
                      </div>`
          productos.push(producto)
        })
        catalogo.html(productos)
      }
    }
    )
  }

  
  function zonaFinca(item) {
    if (item.zona != undefined) {
     return item.zona
   } else if (item.finca != undefined) {
     return item.finca
   } else {
     return "</br>"
   }
  }
  
  
function carritoInicial() {
    if (localStorage.carritoCargado != undefined && localStorage.length > 0) {
      carrito = JSON.parse(localStorage.carritoCargado);
      contarItemsCarrito();
    }
  }

  function contarItemsCarrito() {
    
    cantidadItems.text(carrito.length)
  }
  
  $(document).ready(function () {
    carritoInicial()
    armarCatalogo()
    encabezado.show(2000, function () {
       catalogo.slideDown(3000)
    })
  })
