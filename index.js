
/**
 * Función para determinar si un año n es considerado Año Santo.
 * @param {number} n El año a comprobar.
 * @returns true o false, en función de si es año santo o no.
 */
function anoSanto(n) {
  //TODO: realizar cálculos oportunos
  // 6 5 6 11

  if (n>2100)n--;
  while (n<2021) {
    n+=28;
  }
  while (n>2038) n-=28;
  


  if (n==2021) return true;
  if (n==2027) return true;
  if (n==2032) return true;
  if (n==2038) return true;
  if (n==2049) return true;



  return false;

}




export {
  anoSanto
}