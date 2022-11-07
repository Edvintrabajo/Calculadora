// ELEMENTOS HTML
const output = document.getElementById("actual");
const anterior = document.getElementById("anterior");
const numeros = document.querySelectorAll(".numero");
const signos = document.querySelectorAll(".signo");
const igual = document.getElementById("igual");
const division = document.getElementById("division");
const deletee = document.getElementById("delete");
const clearall = document.getElementById("clear");
const clearerror = document.getElementById("clear-error");
const coma = document.getElementById("coma");
const derivada = document.getElementById("derivada");
const cambiarsigno = document.getElementById("cambiarsigno");
const potencia = document.getElementById("potencia");
const raizcuadrada = document.getElementById("raiz-cuadrada");
const porcentaje = document.getElementById("porcentaje");
const mc = document.getElementById("memory-clear");
const mr = document.getElementById("memory-retrieve");
const ma = document.getElementById("memory-add");
const ml = document.getElementById("memory-less");
const ms = document.getElementById("memory-set");
const mh = document.getElementById("memory-history");
const ventanamemoria = document.querySelector(".ventana-memoria");
const valormemoria = document.getElementById("valor-memoria");


// FUNCION QUE SE EJECUTA AL RECARGAR LA PAGINA
window.onload = function() {
    if(localStorage.getItem("numero") != null) {
    valormemoria.innerHTML = localStorage.getItem("numero");
    }
}


// OBJETO CALCULADORA
const calculadora = {

    // FUNCION PARA MOSTRAR LOS NUMEROS
    escribirNumero(numero) {
        if(output.innerHTML.length >= 10) {
            alert('No puedes escribir más de 10 dígitos');
            output.innerHTML = "";
        } else{
            output.innerHTML = output.innerHTML + numero;
        }
    },

    // FUNCION PARA MOSTRAR LOS OPERADORES
    escribirOperador(operador) {
        if(output.innerHTML == "" && operador != "-") {
            alert('No puedes escribir un operador sin un número');
        } else{
            if(output.innerHTML.substr(-1) == "+" || output.innerHTML.substr(-1) == "-" || output.innerHTML.substr(-1) == "*" || output.innerHTML.substr(-1) == "/" || output.innerHTML.substr(-1) == ".") {
                alert('No puedes escribir dos operadores seguidos');
            }
            else if(output.innerHTML.length == 10) {
                alert('No puedes escribir más de 10 dígitos');
                output.innerHTML = "";
            } else{
                output.innerHTML = output.innerHTML + operador;
            }
        }
    },

    // FUNCTION PARA CALCULAR EL RESULTADO
    calcular() {
        if(output.innerHTML == "") {
            alert('No puedes calcular sin un número');
        } else{
            if(output.innerHTML.substr(-1) == "+" || output.innerHTML.substr(-1) == "-" || output.innerHTML.substr(-1) == "*" || output.innerHTML.substr(-1) == "/") {
                alert('No puedes calcular con un operador al final');
                output.innerHTML = output.innerHTML.slice(0, -1);
            } else{
                anterior.innerHTML = output.innerHTML + " = " + eval(output.innerHTML);
                output.innerHTML = eval(output.innerHTML);
                if(output.innerHTML.length >= 10) {
                    alert('No puedes escribir más de 10 dígitos');
                    output.innerHTML = "";
                    anterior.innerHTML = "";
                }
            }
        }
    },

    // FUNCION PARA EL TECLADO
    teclado(e) {
        if(e.key == 1 || e.key == 2 || e.key == 3 || e.key == 4 || e.key == 5 || e.key == 6 || e.key == 7 || e.key == 8 || e.key == 9 || e.key == 0) {
            calculadora.escribirNumero(e.key);
        } else if(e.key == "+" || e.key == "-" || e.key == "*" || e.key == "/" || e.key == ".") {
            calculadora.escribirOperador(e.key);
        } else if(e.key == "Enter") {
            e.preventDefault();
            calculadora.calcular();
        } else if(e.key == "Backspace") {
            output.innerHTML = output.innerHTML.slice(0, -1);
        } else if(e.key == "c") {
            output.innerHTML = "";
            anterior.innerHTML = "";
        }
    },

    // FUNCION PARA LOS DEMAS
    derivada() {
        if(output.innerHTML == "") {
            alert('No puedes calcular sin un número');
        } else{
            if(output.innerHTML.substr(-1) == "+" || output.innerHTML.substr(-1) == "-" || output.innerHTML.substr(-1) == "*" || output.innerHTML.substr(-1) == "/") {
                alert('No puedes calcular con un operador al final');
                output.innerHTML = output.innerHTML.slice(0, -1);
            } else{
                anterior.innerHTML = "1 / " + output.innerHTML + " = " + (1 / output.innerHTML).toFixed(2);
                output.innerHTML = (1 / output.innerHTML).toFixed(2);
            }
        }
    },

    cambiarsigno() {
        if(output.innerHTML == "") {
            alert('No puedes calcular sin un número');
        } else{
            if(output.innerHTML.substr(-1) == "+" || output.innerHTML.substr(-1) == "-" || output.innerHTML.substr(-1) == "*" || output.innerHTML.substr(-1) == "/") {
                alert('No puedes calcular con un operador al final');
                output.innerHTML = output.innerHTML.slice(0, -1);
            } else{
                output.innerHTML = output.innerHTML * -1;
            }
        }
    },

    raizcuadrada() {
        if(output.innerHTML == "") {
            alert('No puedes calcular sin un número');
        } else{
            if(output.innerHTML.substr(-1) == "+" || output.innerHTML.substr(-1) == "-" || output.innerHTML.substr(-1) == "*" || output.innerHTML.substr(-1) == "/") {
                alert('No puedes calcular con un operador al final');
                output.innerHTML = output.innerHTML.slice(0, -1);
            } else{
                anterior.innerHTML = "sqrt(" + output.innerHTML + ") = " + (Math.sqrt(output.innerHTML)).toFixed(2);
                output.innerHTML = (Math.sqrt(output.innerHTML)).toFixed(2);
            }
        }
    },

    porcentaje() {
        if(output.innerHTML == "") {
            alert('No puedes calcular sin un número');
        } else{
            if(output.innerHTML.substr(-1) == "+" || output.innerHTML.substr(-1) == "-" || output.innerHTML.substr(-1) == "*" || output.innerHTML.substr(-1) == "/") {
                alert('No puedes calcular con un operador al final');
                output.innerHTML = output.innerHTML.slice(0, -1);
            } else{
                anterior.innerHTML = output.innerHTML + " % = " + output.innerHTML / 100;
                output.innerHTML = output.innerHTML / 100;
            }
        }
    },

    // LOCAL STORAGE (MEMORIA)
    memoryClear() {
        if(output.innerHTML.substr(-1) == "+" || output.innerHTML.substr(-1) == "-" || output.innerHTML.substr(-1) == "*" || output.innerHTML.substr(-1) == "/") {
            alert('No puedes guardar con un operador al final');
            output.innerHTML = output.innerHTML.slice(0, -1);
        } else{
            localStorage.clear();
            valormemoria.innerHTML = "";
        }
    },

    memorySet() {
        if(output.innerHTML == "") {
            alert('No puedes guardar sin un número');
        } else{
            if(output.innerHTML.substr(-1) == "+" || output.innerHTML.substr(-1) == "-" || output.innerHTML.substr(-1) == "*" || output.innerHTML.substr(-1) == "/") {
                alert('No puedes guardar con un operador al final');
                output.innerHTML = output.innerHTML.slice(0, -1);
            } else{
                localStorage.setItem("numero", eval(output.innerHTML));
                valormemoria.innerHTML = localStorage.getItem("numero");
            }
        }
    }
}

// EVENT LISTENER PARA EL TECLADO
document.addEventListener("keydown", function(e) {
    calculadora.teclado(e);
});


// EVENTOS PARA LOS NUMEROS
numeros.forEach(div => div.addEventListener("click", (e) => calculadora.escribirNumero(e.target.innerHTML)));


// EVENTOS PARA LOS SIGNOS
signos.forEach(div => div.addEventListener("click", (e) => calculadora.escribirOperador(e.target.innerHTML)));

division.addEventListener("click", () => calculadora.escribirOperador("/"));

igual.addEventListener("click", () => calculadora.calcular());


// EVENTOS DELETE, CLEAR Y CLEAR ERROR
deletee.addEventListener("click", () => output.innerHTML = output.innerHTML.slice(0, -1));

clearall.addEventListener("click", () => {
    anterior.innerHTML = "";
    output.innerHTML = "";
});

clearerror.addEventListener("click", () => output.innerHTML = "");


// EVENTO PARA LOS DEMAS
derivada.addEventListener("click", () => calculadora.derivada());

cambiarsigno.addEventListener("click", () => calculadora.cambiarsigno());

potencia.addEventListener("click", () => {
    if(output.innerHTML == "") {
        alert('No puedes calcular sin un número');
    } else{
        if(output.innerHTML.substr(-1) == "+" || output.innerHTML.substr(-1) == "-" || output.innerHTML.substr(-1) == "*" || output.innerHTML.substr(-1) == "/") {
            alert('No puedes calcular con un operador al final');
            output.innerHTML = output.innerHTML.slice(0, -1);
        } else{
            valor = output.innerHTML * output.innerHTML;
            longitud = valor.toString().length;
            if(longitud >= 10) {
                alert('No puedes escribir más de 10 dígitos');
                output.innerHTML = "";
            } else{
                anterior.innerHTML = output.innerHTML + "^2 = " + valor.toFixed(2);
                output.innerHTML = valor.toFixed(2);
            }
        }
    }
});

raizcuadrada.addEventListener("click", () => calculadora.raizcuadrada());

porcentaje.addEventListener("click", () => calculadora.porcentaje());


// EVENTOS LOCAL STORAGE (MEMORIA)
mc.addEventListener("click", () => calculadora.memoryClear());

ms.addEventListener("click", () => calculadora.memorySet());

ma.addEventListener("click", () => {
    if(localStorage.getItem("numero") == null) {
        alert('No hay ningún número guardado');
    } else if(output.innerHTML == "") {
        alert('No hay ningún número en la calculadora');
    } else{
        if(output.innerHTML.substr(-1) == "+" || output.innerHTML.substr(-1) == "-" || output.innerHTML.substr(-1) == "*" || output.innerHTML.substr(-1) == "/") {
            alert('No puedes guardar con un operador al final');
            output.innerHTML = output.innerHTML.slice(0, -1);
        } else{
            total = eval(output.innerHTML);
            let numero = eval(`${localStorage.getItem("numero")}+${total}`);
            localStorage.setItem("numero", numero);
            valormemoria.innerHTML = localStorage.getItem("numero");
        }
    }
});

ml.addEventListener("click", () => {
    if(localStorage.getItem("numero") == null) {
        alert('No hay ningún número guardado');
    } else if(output.innerHTML == "") {
        alert('No hay ningún número en la calculadora');
    } else{
        if(output.innerHTML.substr(-1) == "+" || output.innerHTML.substr(-1) == "-" || output.innerHTML.substr(-1) == "*" || output.innerHTML.substr(-1) == "/") {
            alert('No puedes guardar con un operador al final');
            output.innerHTML = output.innerHTML.slice(0, -1);
        } else{
            total = eval(output.innerHTML);
            let numero = eval(`${localStorage.getItem("numero")}-${total}`);
            localStorage.setItem("numero", numero);
            valormemoria.innerHTML = localStorage.getItem("numero");
        }
    }
});

mr.addEventListener("click", () => {
    if(localStorage.getItem("numero") == null) {
        alert('No hay ningún número guardado');
    } else{
        output.innerHTML = localStorage.getItem("numero");
    }
});

mh.addEventListener("click", () => {
    if(ventanamemoria.style.display == "none") {
        ventanamemoria.style.display = "block";
    } else{
        ventanamemoria.style.display = "none";
    }
});