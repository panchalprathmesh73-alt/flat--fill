let cl = console.log;

let companies = [
    { name: "Company One", id: 1, category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id: 2, category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", id: 3, category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", id: 4, category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", id: 5, category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id: 6, category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id: 7, category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", id: 8, category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id: 9, category: "Retail", start: 1981, end: 1989 }
];

let result1=companies.find((parms)=>{
    return `${parms.end-parms.start} <=2 1`
})
cl(result1);

let result2=companies.reduce((acc,cv)=>{
    acc.push ({
        compname : cv.name,
        duration :`${cv.end-cv.start}years`
    })    

    return acc
},[])
cl(result2)

let result3=companies.some((cv)=>{
     return cv.category === "Finance";
})
cl(result3)

let result4=companies.some((cv)=>{
    return (cv.end-cv.start === 8);
})
cl(result4);

companies.forEach((parms)=>{
    if (parms.end-parms.start===5){
        cl(parms.name)
    }
})

for (let i = 0; i < companies.length; i++) {

    if (companies[i].end - companies[i].start >= 21) {
        cl(companies[i].name);
    }

}

let result5=companies.some((cv)=>{
    return (cv.category==="Technology")
})
cl(result5)

let result6=companies.some((cv)=>{
    return (cv.start===1981)
})
cl(result6)

let result7=companies.every((cv)=>{
   return (cv.end-cv.start <=21)
})
cl(result7)

let result8 = companies.every((cv) => {
    return cv.end - cv.start < 30;
});
cl(result8);

let result9 =companies.every((cv)=>{

     return cv.name.startsWith("Company");
})
cl(result9)

let result10 = companies.every((cv) => {
    return cv.id <= 9;
});
cl(result10);

let numbers = new Set([10, 20, 30, 10, 20, 40]);

cl(numbers);

let num =new Set([1,2,3,4,5,6,7,5,3,1,9,0,1,2]);
cl(Array.from(num))

let num1=([10,20,30,40,50,60])
num1.fill(0,1,4)
cl(num1)

let numbers1 = [10, 20, 30, 40, 50];
let result11 = numbers1.fill(100, 2);
cl(result11);

let num2=[20,[30,40],50,[60,70,80],90,[100,110]];
let result12 =num2.flat(Infinity)
cl(result12);
