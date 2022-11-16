var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ErrorValidacion = /** @class */ (function (_super) {
    __extends(ErrorValidacion, _super);
    function ErrorValidacion(mensaje) {
        var _this = _super.call(this, mensaje) || this;
        _this.name = "Error en el formulario";
        return _this;
    }
    return ErrorValidacion;
}(Error));
function formulario(nombre, apellido) {
    var user = nombre + ' ' + apellido;
    if (!nombre && !apellido) {
        throw new ErrorValidacion("Ambos campos vacios");
    }
    if (!nombre) {
        throw new ErrorValidacion("Campo nombre vacio");
    }
    if (!apellido) {
        throw new ErrorValidacion("Campo apellido vacio");
    }
    return user;
}
try {
    var usuario = formulario();
    console.log(usuario);
}
catch (error) {
    console.log("Dato invalido: " + error.message);
}
