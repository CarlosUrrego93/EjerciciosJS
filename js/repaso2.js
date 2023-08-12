/**
 * 2 -
 * Ingresar un departamento (Cundinamarca, quindio, antioquia, valle)
 * Ingresar objetivo de visita (turismo, comidas, museos)
 * Dependiendo de la opcion elegida
 * ejemplo1 (antioquia y comidas)
 * mostrar un alert("las comidas mas populares en antioquia son la bandeja paisa, arepa rellena etc" )
 * ejemplo 2: se ingreso cundinamarca y turismo
 * mostrar un alert(lugares para visitar en cundinamarca es monserrate, la candelaria etc)
 * alert("opcion no valida") en caso que no se ingrese alguna de las opciones
 *
 */

let departamento = prompt(
  "Ingrese departamento (cundinamarca, quindio, antioquia, valle)"
);
let visita = prompt("Ingrese motivo de visita (turismo, comida, museos)");

if (
  departamento === null ||
  departamento === "" ||
  visita === null ||
  visita === ""
) {
  alert("Opción Invalida");
} else {
  departamento = departamento.toLowerCase();
  visita = visita.toLowerCase();
  if (departamento === "cundinamarca" && visita === "turismo") {
    alert(
      "Catedral de Sal de Zipaquirá \nParque Jaime Duque \nParque Nacional Natural Chingaza \nPáramo de Sumapaz \nRepresa de Tominé \nPanaca Sabana \nParque Natural Chicaque \nMina de Sal de Nemocón"
    );
  } else {
    if (departamento === "cundinamarca" && visita === "comida") {
      alert(
        "Roscón \nresobado de La Vega \nQueso con arequipe en Ubaté \nConejo en la vía Fusagasugá-Bogotá \nCaldo de costilla en la plaza de mercado de Cucunubá \nPizza en Suesca \nViudo de capaz en Girardot  \nGarullas en Soacha \nPostres en Sopó \nFresas con crema en Sibaté"
      );
    } else {
      if (departamento === "cundinamarca" && visita === "museos") {
        alert(
          "Museo Arqueológico y Paleontológico de Pubenza \nMuseo de la Ciudad Autoconstruida \nCasa Museo Tequendama \nMuseo Aeroespacial Colombiano \nMuseo de Arqueología e Historia Natural Jaime Hincapié Santa María \nMuseo del Ser Humano \nMuseo Arqueológico de Soacha Nueva Esperanza \nMuseo Nueva esperanza MANE "
        );
      } else {
        if (departamento === "quindio" && visita === "turismo") {
          alert(
            "salento \nparque del café \npanaca \nparque del cultura agropecuaria \nvalle del cocora \nlas calles de filandia \nrecuca recorrido de la cultura cafetera \nbalsaje por el rio de la vieja \ntour al nevado santa isabel \nparque de los arrieros mariposario \njardín botánico del quindío \nfinca cafetera el ocaso \ncafé san alberto en buenavista \nparapente en buenavista \nplaza principal de pijao quindio \ntour en jeep panorámico \ncabalgatas \nparque de la vida en armenia \nrecorrido cafetero \nfinca buenos aires \nel paraiso del bambú y la guadua \nplaza principal de genova quindío \ncementerio libre de circasia \ntour de café la tienda de los mecatos \ntour de café \nhacienda buenos aires \n rutas de ciclo montañismo"
          );
        } else {
          if (departamento === "quindio" && visita === "comida") {
            alert(
              "mondongo \nsancocho \ntrucha \ncalentado \npaisa \narepas \nfiambre \nsudados \nparva \nmazamorra \nclaro \nforcha \nnatilla \nbuñuelos \najiaco \nlechona \ntamal \npatacones \nempanadas \naguapanela"
            );
          } else {
            if (departamento === "quindio" && visita === "museos") {
              alert(
                "museo del oro Quimbaya \nRegion paisaje Salento \nCentro de interpretacion bejuco al canasto \nMuseo del Disco y la Música \nAntiguedades Pijao"
              );
            } else {
              if (departamento === "antioquia" && visita === "turismo") {
                alert(
                  "Jardin \nGuatape \nSanta fe de Antioquia \nJerico \nSan Rafael \nTamesis \nSan Carlos \nUrrao \nSonsón \nComuna 13 \nMetro Cable \nMetro elevado \nPueblito Paisa"
                );
              } else {
                if (departamento === "antioquia" && visita === "comida") {
                  alert(
                    "Bandeja paisa \nMazamorra paisa \nFríjoles antioqueños \nFríjoles con pezuña \nSancocho antioqueño \nSopa de mondongo antioqueño \nMorcilla antioqueña \nChorizo antioqueño \nCarnes asadas al carbón o parrilladas \nPosta o muchacho sudao \nHogao \nCalentao paisa o antioqueño \nArepa paisa tradicional o tela \nArepa de maíz pelao \nArepa de mote \nArepa de chócolo \nPeto \nQuesito antioqueño \nMigas de arepa \nZamboviejo."
                  );
                } else {
                  if (departamento === "antioquia" && visita === "museos") {
                    alert(
                      "Museo Antropológico de la Diócesis de Apartadó \nMuseo Comunitario de Guatapé, municipio de Guatapé \nMuseo Histórico y Arqueológico de Marinilla, municipio de Marinilla \nMuseo de Arte Religioso y Panteón de los Hijos de La Ceja, municipio de La Ceja \nMuseo de las Hermanas Franciscanas, municipio de Granada Museo Arqueológico \nCasa de la Cultura Pedro Justo Berrío, municipio de Puerto Berrío \nMuseo de arte religioso Tiberio de J. Salazar y Herrera, municipio de Sonsón \nMuseo Folclórico la Casa de los Abuelos, municipio de Sonsón \nMuseo Abelardo Jaramillo, municipio de Entrerríos \nMuseo Histórico de Entrerríos, municipio de Entrerríos \nMuseo Clara Rojas, municipio de Jardín \nMuseo Casa de la Cultura, municipio de Jardín Museo \nColonial Juan del Corral, municipio de Santa Fe de Antioquia"
                    );
                  } else {
                    if (departamento === "valle" && visita === "turismo") {
                      alert(
                        "Zoológico de Cali \nIsla de Malpelo \nBasílica del Señor de los Milagros de Buga \nLago Calima \nParque Nacional de la Uva \nIsla de Juan Chado"
                      );
                    } else {
                      if (departamento === "valle" && visita === "comida") {
                        alert(
                          "Chontaduro \nSancocho de Gallina \nCholado \nRaspado \nPizza \nJugo de Lulo \nLulada \nMango Biche"
                        );
                      } else {
                        if (departamento === "valle" && visita === "museos") {
                          alert(
                            "Museo Arqueológico Julio César Cubillos \nMuseo Arqueológico MUSA La Merced \nMuseo del oro Calima \nMuseo MULI \nMuseo Libre de Arte Público de Colombia \nMuseo MULI Sede Edificio \nAntigua Estación del Tren \nCALIWOOD Museo de la Cinematografía \nMuseo La Tertulia \nINCIVA -Museo de Ciencias Naturales Federico Carlos Lehmann Valencia \nMariposario ANDOKE \nFundación Jardín Botánico de Cali \nInstituto para la Investigación y la Preservación del Patrimonio Cultural y Natural del Valle del Cauca INCIVA \nMuseo de Ciencias Naturales Federico Carlos Lehmann Valencia \nMuseo de siloé"
                          );
                        } else {
                          alert("Sin sugerencias");
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
