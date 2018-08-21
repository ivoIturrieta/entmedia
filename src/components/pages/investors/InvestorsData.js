import corfo from "../../../img/corfo2.png";
import panoramicaCorfo from "../../../img/panoramicaCorfo.png";
import startupChile from "../../../img/startupChile.jpeg";
import startupChilePanoramica from "../../../img/panoramicaSc.jpg";

let id = 0;
function createData(
  logo,
  name,
  entity,
  beneficiario,
  financiamiento,
  esperado,
  criterio,
  panoramica,
  programa
) {
  id += 1;
  return {
    id,
    name,
    entity,
    beneficiario,
    financiamiento,
    esperado,
    criterio,
    logo,
    panoramica,
    programa
  };
}

export const rows = [
  createData(
    corfo,
    "Corfo",
    "Gobierno de Chile",
    [
      {
        title: "Persona natural",
        requisitos: [
          "Mas de 18 años.",
          "Cuente con residencia en Chile.",
          "Que no haya iniciado actividades en SII o que tribute en segunda categoría sin importar la fecha de iniciación de actividades. Si tributa en primera categoría debe haber iniciado actividades en los giros de primera categoría en los últimos 24 meses.",
          "Tener ventas netas que no excedan los $100 millones en los últimos 6 meses."
        ]
      },
      {
        title: "Persona juridica",
        requisitos: [
          "Tenga fines de lucro.",
          "Esté constituida en Chile.",
          "Haya iniciado actividades en los últimos 24 meses.",
          "Tenga ventas netas que no excedan los $100 millones en los últimos 6 meses."
        ]
      }
    ],
    [
      {
        title: "Monto Subsidio $ 25.000.000 pesos.",
        requisitos: [
          "Este cofinanciamiento cubre hasta el 75% del costo del proyecto. El monto restante debe ser aportado por el beneficiario, en dinero en efectivo, a lo largo de la ejecución del proyecto.",
          "Cada proyecto deberá presupuestar y recibir servicios de mentoría, realizados por integrantes de alguna de las Redes de Mentores de Corfo, destinando $500.000 del subsidio para este fin.",
          "Revisa aquellas actividades financiables y aquellas que NO lo son en las Bases Técnicas de Capital Semilla. Todos los documentos que necesitas revisar, están en la pestaña Bases y descargables"
        ]
      }
    ],
    [
      {
        title:
          "El proyecto debe durar 12 meses pudiendo prorrogarse en casos justificados hasta completar un total de 14 meses.",
        requisitos: [
          "Concretar ventas.",
          "Levantar Capital",
          "Permita formar una base de clientes o usuarios."
        ]
      }
    ],
    [
      {
        primera: ["Video (80%)", "Potencial de Crecimiento (20%)"],
        segunda: [
          "Innovación (40%)",
          "Potencial de Crecimiento (25%)",
          "Equipo (25%)",
          "Calidad del Pitch (10%)"
        ],
        tercera: [
          "Grado de Innovación del Producto o Servicio (40%)",
          "Equipo (25%)",
          "Estrategia de crecimiento y potencial de crecimiento (20%)",
          "Estrategia de Apropiabilidad (15%)"
        ]
      }
    ],
    panoramicaCorfo,
    ["Corfo - Capital Semilla"]
  ),
  createData(
    startupChile,
    "Startup Chile",
    "Gobierno de Chile",
    [
      {
        title: "¿Qué estamos buscando?",
        requisitos: [
          "Nuestro programa de Seed busca atraer emprendedores con un enfoque global a hacer negocios en Chile. Seed acelera estados tempranos de emprendimientos que reforzarán el ambiente empresarial, ayudarán a formar la cultura de innovación en Chile y se conectarán con Latinoamérica para crecer desde nuestra región hacia el mundo."
        ]
      }
    ],
    [
      {
        title: "¿Qué ofrecemos?",
        requisitos: [
          "La startup recibirá 25 millones de pesos, equivalentes al 90% del subsidio, en forma de reembolso o en cuotas. El 10% restante debe ser proveniente del startup/fundador. Además, las startups que pasen al Demo Day tendrán la opción de postular a otros 25 millones de pesos una vez que finalice el programa inicial.",
          "Durante los 6 meses de experiencia en Chile, Start-Up Chile acelerará y colaborará con la startup. Además entregará la oportunidad de compartir en un ambiente creativo y diverso con personas de más de 30 nacionalidades, lo que genera una experiencia inolvidable.",
          "Los equipos de trabajo extranjeros tendrán una visa de trabajo por 1 año. Todos los equipos podrán acceder a la comunidad de Start-Up Chile que incluye privilegios de hasta $300.000 USD en por ejemplo, Microsoft BizSpark, Facebook Start, Amazon Web Services y muchos más. Todos los startups pueden usar el espacio de trabajo compartido por hasta 9 meses desde su llegada al programa, libre de costos."
        ]
      }
    ],
    [
      {
        requisitos: [
          "Concretar ventas.",
          "Levantar Capital",
          "Permita formar una base de clientes o usuarios."
        ],
        title:
          "El proyecto debe durar 12 meses pudiendo prorrogarse en casos justificados hasta completar un total de 14 meses."
      }
    ],
    [
      {
        primera: ["Video (80%)", "Potencial de Crecimiento (20%)"],
        segunda: [
          "Innovación (40%)",
          "Potencial de Crecimiento (25%)",
          "Equipo (25%)",
          "Calidad del Pitch (10%)"
        ],
        tercera: [
          "Grado de Innovación del Producto o Servicio (40%)",
          "Equipo (25%)",
          "Estrategia de crecimiento y potencial de crecimiento (20%)",
          "Estrategia de Apropiabilidad (15%)"
        ]
      }
    ],
    startupChilePanoramica,
    ["Seed", "S Factory"]
  )
];
