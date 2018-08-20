import wework from "../../img/wework.jpg";
import wework2 from "../../img/weworkprofile.jpg";
import edge from "../../img/edge2.png";
import santander from "../../img/workcafe1.jpg";
import latam from "../../img/ltama2.png";

let id = 0;
function createData(
  image,
  name,
  prices,
  location,
  website,
  map,
  panoramic,
  text
) {
  id += 1;
  return { id, name, prices, location, website, map, image, panoramic, text };
}

export const rows = [
  createData(
    wework,
    "WeWork",
    [
      {
        title: "Hot Desk",
        subheader: "Con un precio inicial de CLP165,000 por mes",
        price: "0",
        description: [
          "10 users included",
          "2 GB of storage",
          "Help center access",
          "Email support"
        ],
        buttonText: "Sign up for free",
        buttonVariant: "outlined"
      },
      {
        title: "Pro",
        subheader: "Most popular",
        price: "15",
        description: [
          "20 users included",
          "10 GB of storage",
          "Help center access",
          "Priority email support"
        ],
        buttonText: "Get started",
        buttonVariant: "contained"
      },
      {
        title: "Enterprise",
        price: "30",
        description: [
          "50 users included",
          "30 GB of storage",
          "Help center access",
          "Phone & email support"
        ],
        buttonText: "Contact us",
        buttonVariant: "outlined"
      }
    ],
    "Avda. Apoquindo 5950",
    "https://www.wework.com/",
    { lat: -33.409023, lng: -70.568871 },
    wework2,
    {
      subphoto:
        "No importa si lo que necesitas es un escritorio, una suite de oficina o una oficina central completa, nosotros creamos un entorno que mejorará tu productividad, innovación y colaboración.",
      title: "Bienvenido a WeWork",
      paragraph:
        "WeWork es una red global de espacios de trabajo donde las personas y las compañías crecen juntos. Transformamos nuestros edificios en entornos donde se fomenta la creatividad, la concentración y las conexiones. Esta transformación va mas allá de crear los mejores espacios de trabajo; queremos crear un movimiento donde humanizamos el trabajo. En verdad creemos que entre directores ejecutivos pueden llegar a ayudarse mutuamente, que nos podemos sentir tan cómodos en la oficina como en casa, y que todos podemos emocionarnos cuando llega el lunes si lo que hacemos nos apasiona y significa mucho para nosotros."
    }
  ),
  createData(
    edge,
    "Edge Cowork - El Golf",
    {
      hotDesk: "159.000",
      dedicated: "199.000",
      partTime: "119.000",
      dayPass: "19.000"
    },
    "San Sebastian 2909",
    "https://edgecowork.com/ubicaciones/el-golf/",
    { lat: -33.414708, lng: -70.600182 }
  ),
  createData(
    santander,
    "Work Café / Banco Santander",
    "",
    "Av. Apoquindo 3575, Las Condes.",
    16.0,
    {
      lat: -33.416258,
      lng: -70.592511
    }
  ),
  createData(
    latam,
    "Latam - El Golf",
    "",
    "Av. Apoquindo 3300, Zócalo Oriente, Las Condes, Santiago",
    3.7,
    {
      lat: -33.416567,
      lng: -70.595789
    }
  )
];
