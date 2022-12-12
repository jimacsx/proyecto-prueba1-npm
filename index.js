module.exports = {
  /**
   * Suma de dos números
   * @example
   * 1 + 3 = 4
   * @param { number } n1 Número uno de la suma
   * @param { number } n2 Número dos de la suma
   * @returns n1 + n2
   */
  suma: function (n1, n2) {
    return this.esNumero(n1, n2) ? n1 + n2 : this.mensajeError();
  },
  /**
   * Resta de dos números
   * @example
   * 1 - 3 = -2
   * @param { number } n1 Número uno de la resta
   * @param { number } n2 Número dos de la resta
   * @returns n1 - n2
   */
  resta: function (n1, n2) {
    return this.esNumero(n1, n2) ? n1 - n2 : this.mensajeError();
  },
  /**
   * Multiplicación de dos números
   * @example
   * 1 * 3 = 3
   * @param { number } n1 Número uno de la multiplicación
   * @param { number } n2 Número dos de la multiplicación
   * @returns n1 * n2
   */
  multiplicacion: function (n1, n2) {
    return this.esNumero(n1, n2) ? n1 * n2 : this.mensajeError();
  },
  /**
   * División de dos números
   * @example
   * 1 / 1 = 1
   * @param { number } n1 Número uno de la división
   * @param { number } n2 Número dos de la división
   * @returns n1 / n2
   */
  division: function (n1, n2) {
    return this.esNumero(n1, n2) ? n1 / n2 : this.mensajeError();
  },
  /**
   * Comprueba si los valores introducidos son de tipo número
   * @param { number } n1
   * @param { number } n2
   */
  esNumero: function (n1, n2) {
    return typeof n1 === "number" && typeof n2 === "number";
  },
  /**
   * Muestra un mensaje de error cuando no es número uno de los dos o los dos
   */
  mensajeError: function () {
    console.log(
      "Uno de los valores introducidos o los dos no son de tipo numérico"
    );
  },
};
