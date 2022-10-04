export type menuElementType = {
 title : string,
 description : string,
 skills?:Array<object>,
 links?: {
  linkedin:string,
  facebook:string,
  instagram:string
 }
}


export const menuData : Array<menuElementType> = [
 {

  title: "about", 
  description : "Salve. Mi chiamo Francesco. Sono un ragazzo di 33 anni e vengo da un piccolo paese del centro Italia. Ho sempre avuto passione per il web developing e la grafica. Amo la fotografia e la logica della cose. Dopo il diploma mi sono dovuto allontanare professionalmente da quello che ho sempre pensato fosse il mio futuro lavorativo. Adesso ho avuto l'opportunita di riallineare le due cose e, dopo aver stravolto la mi vita, ora ho tanta voglia di dimostrare e di emergere in un ambiete che sento sempre più mio.  "

 },
 {
  title : "Skills & Experience",
  description : " Ho terminato un corso intensivo di sei mesi in cui ho approfondito professionalmente i principali linguaggi per il front end(html,css,sass,js,react.js) ed imparato le basi di Node.js per la gestione del back-end. Ho spiccate capità nell'utilizzo dei principali programmi di grafica vettoriale e costruzione UI/UX. Lavorato in Team con metodologia Agile seguendo il metodo SCRUM ed utilizzato il version controller Github. ",
  skills : [
   {
    title :"Front-end",
    score : 8
   },
   {
    title :"back-end",
    score : 6
   },
   {
    title :"React.js",
    score : 8
   },
   {
    title :"Vectorial design",
    score : 7
   },
   {
    title :"UI/UX design",
    score : 7
   },
  ]
 },
 {
  title : "Contact",
  description: "Sono interessato ad entrare a far parte di Team affiatati da cui imparare e con cui poter crescere e condividere le mie idee. Per qualsiasi domanda sarei felicissimo di essere contattato, di seguito i miei Link personali ed una form per un contatto diretto",
  links: {
   linkedin : "https://www.linkedin.com/in/francesco-cristini-501037244/",
   instagram : "",
   facebook : "",
  }
 }
]