const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12"
  }
};

const companiesName = () => {
  companies.forEach(companie => console.log(`O nome desta empresa é ${companie.name} e foi fundada em ${companie.start}`));
};

const startDate = (start=1987) => {
  return companies.filter(companie => companie.start>start);
}; //se tiver chavetas tem de ter return!!!!!

const sumAges = ages.reduce((accumulator, currentValue) => accumulator + currentValue,0);

const [a, ...rest]=companies;
console.log(a.name, a.category);

// const {name,address}= person;
// const {street}= address;
// console.log(street);

// const {street}= person.address;
// console.log(street); 
//sinto que não é isto porque não estou a separar a primeira but idk
//n era :C

const {name, address:{street}}= person;
console.log(street); //agora deu direito

const companyStart= (start=1996, end=2004) => {
  return companies.map(company => (company.start > start && company.start<= end)?true:false)
};