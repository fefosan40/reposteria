let tablaProductos = $("#tablaProductos")  
let formularioDatosUsuario = $("#datosUsuario")
let resumenCompra = $("#resumenCompra")
let logo = $("#logo")

function mostrarProductosElegidos(){
    catalogo.fadeOut(1000, function () {
        formularioDatosUsuario.fadeOut(1000, function(){
            resumenCompra.fadeOut(1000, function(){
                tablaProductos.slideDown(2000)
            })
        })              
    })    
  }

function seguirComprando() {
    tablaProductos.fadeOut(1000, function(){
        catalogo.slideDown(2000)
    })
  }

function iniciarCompra (){
    if (carrito.length == 0) {
      alert("Ud no ha añadido ningún producto a su carrito")
    }
        else {tablaProductos.fadeOut (1000, function (){
      formularioDatosUsuario.slideDown(2000)
        })}
  }


function volverCarrito (){
    formularioDatosUsuario.fadeOut (1000, function (){
      tablaProductos.slideDown(2000)
    })
  }

  function mostrarResumen (){
    formularioDatosUsuario.fadeOut (1000, function (){
      resumenCompra.slideDown(2000)
    })
  }

  function volverFormulario (){
    resumenCompra.fadeOut (1000, function (){
      formularioDatosUsuario.slideDown(2000)
    })
  }

  function volverArriba() {
    $("html, body").animate({
      scrollTop: 0
    }, 2000)
  }

  logo.click (function (){
    tablaProductos.fadeOut(1000, function(){
        formularioDatosUsuario.fadeOut(1000, function(){
            resumenCompra.fadeOut(1000, function(){
                catalogo.slideDown(2000)
            })
        })
    })
          

  })
  