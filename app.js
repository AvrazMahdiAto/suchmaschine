const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

/** */

rl.question(
      `Wer suchest du ? : `, (input) => {getData(input)})

/** input : ist alle was der user in terminal angibt */
/** schicken wir diese input zu unsere getData function */

const student =[{
name :'Ali',
nachname:"Hossain",
Alt:28,
Beruf:"tutor",
Stadt:"Berlin",
dci : "von 09-2022 bis 10.2023 war bei DCI"},

{name :'Avraz',
nachname:"Ato",
Alt:31,
Beruf:"Schuler",
 Stadt:"Leipzig",
 dci : "von 09-2022 bis 10.2023 war bei DCI"},

 {name :'Mohammed',
nachname:"Al Zahra",
Alt:29,
Beruf:"Schuler",
 Stadt:"Leipzig",
 dci : "von 09-2022 bis 10.2023 war bei DCI"},

 {name :'Anton',
 nachname:"Lust",
 Alt:30,
 Beruf:"Schuler",
  Stadt:"Berlin",
  dci : "von 09-2022 bis 10.2023 war bei DCI"},

  {name :'Anton',
 nachname:"Lust",
 Alt:30,
 Beruf:"Schuler",
  Stadt:"Berlin",
  dci : "von 09-2022 bis 10.2023 war bei DCI"},

  {name :'Boris',
 nachname:"Dmitriev",
 Alt:30,
 Beruf:"Schuler",
  Stadt:"Berlin",
  dci : "von 09-2022 bis 10.2023 war bei DCI"},

  {name :'Catalin',
 nachname:"FonsecaSilva",
 Alt:30,
 Beruf:"Schuler",
  Stadt:"Berlin",
  dci : "von 09-2022 bis 10.2023 war bei DCI"},

  {name :'Charbel',
 nachname:"El Herrera",
 Alt:30,
 Beruf:"Schuler",
  Stadt:"Berlin",
  dci : "von 09-2022 bis 10.2023 war bei DCI"},

  {name :'Christian',
 nachname:"Heinrich",
 Alt:33,
 Beruf:"Asistin teacher",
  Stadt:"Leipzig",
  dci : "von 09-2022 bis Jetzt"},

  {name :'Dave',
 nachname:"Boese",
 Alt:32,
 Beruf:"Schuler",
  Stadt:"Berlin",
  dci : "von 09-2022 bis 10.2023 war bei DCI"},

  {name :'Herbert',
  nachname:"Nikolajewskidci",
  Alt:29,
  Beruf:"Lehrer",
   Stadt:"Berlin",
   dci : "von 09-2022 bis Jetzt"},

   {name :'Jacqueline',
 nachname:"S-W",
 Alt:30,
 Beruf:"Schuler",
  Stadt:"Berlin",
  dci : "von 09-2022 bis 10.2023 war bei DCI"},

  {name :'Jan',
 nachname:"Folz",
 Alt:30,
 Beruf:"Schuler",
  Stadt:"Berlin",
  dci : "von 09-2022 bis 10.2023 war bei DCI"},

  {name :'Katharina',
 nachname:"Groller",
 Alt:30,
 Beruf:"Schuler",
  Stadt:"Berlin",
  dci : "von 09-2022 bis 10.2023 war bei DCI"},

  {name :'Lina',
 nachname:"Lubig",
 Alt:30,
 Beruf:"Schuler",
  Stadt:"Berlin",
  dci : "von 09-2022 bis 10.2023 war bei DCI"},

  {name :'Marie',
 nachname:"Annonciatehatungimana",
 Alt:30,
 Beruf:"Schuler",
  Stadt:"Berlin",
  dci : "von 09-2022 bis 10.2023 war bei DCI"},

  {name :'Matin',
 nachname:"Arsu",
 Alt:30,
 Beruf:"Schuler",
  Stadt:"Berlin",
  dci : "von 09-2022 bis 10.2023 war bei DCI"},

  {name :'Mohammed',
nachname:"Tinmaz",
Alt:29,
Beruf:"Schuler",
 Stadt:"Leipzig",
 dci : "von 09-2022 bis 10.2023 war bei DCI"},

 {name :'Manuel',
nachname:"Fahrenholz",
Alt:29,
Beruf:"Schuler",
 Stadt:"Leipzig",
 dci : "von 09-2022 bis 10.2023 war bei DCI"},

 {name :'Nancy',
 nachname:"Klemm",
 Alt:29,
 Beruf:"Schuler",
  Stadt:"Leipzig",
  dci : "von 09-2022 bis 10.2023 war bei DCI"},
 
  {name :'Osmel',
  nachname:"osmel",
  Alt:29,
  Beruf:"Schuler",
   Stadt:"Leipzig",
   dci : "von 09-2022 bis 10.2023 war bei DCI"},

   {name :'Rocco',
nachname:"Auth",
Alt:34,
Beruf:"Schuler",
 Stadt:"Berlin",
 dci : "von 09-2022 bis 10.2023 war bei DCI"},

 {name :'Youssef',
 nachname:"Al Zibak",
 Alt:29,
 Beruf:"Tutor",
  Stadt:"Wilhenhafen",
  dci : "von 09-2022 bis 10.2023 war bei DCI"},

  {name :'Nourhan',
  nachname:"Gamil",
  Alt:31,
  Beruf:"Lehrerin",
   Stadt:"Kairo",
   dci : "von 06-2022 bis jetzt bei Lingoda"},
 
]


function getData(params) {
    let capital = params[0].toUpperCase()+params.slice(1) ;
    
 const data = student.filter(obj => obj.name== capital)

if(data.length === 0){
    console.log(`wir haben kein ${params}`)
}else if(data.length >= 2){
    console.log(`wir haben ${data.length} ${params}`)
for (let i = 0; i < data.length; i++) {
    console.log(`ich habe ${params} gefunden,
      ${data[i].name} ${data[i].nachname},
       ${data[i].Alt} Jahre alt , 
    Beruf : ${data[i].Beruf} bei DCI
      Adresse : wohnt in ${data[i].Stadt} 
       ${data[i].dci}
      Email adresse lautet : ${data[i].name}.${data[i].nachname}@dci.education`)
}
}else{
     console.log(`ich habe ${params} gefunden,
      ${data[0].name} ${data[0].nachname},
       ${data[0].Alt} Jahre alt , 
       Beruf : ${data[0].Beruf} bei DCI
       Adresse : wohnt in ${data[0].Stadt} 
       ${data[0].dci}
       E-mail : Email adresse lautet : ${data[0].name}.${data[0].nachname}@dci.education`)
  }
 
rl.close()
}


