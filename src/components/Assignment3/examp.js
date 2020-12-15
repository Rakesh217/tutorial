const girls = [       
    {name: 'leo', age: 4},       
    {name: 'hash', age: 20},       
    {name: 'mike', age: 9},       
    {name: 'Amy', age: 33}];
const ages = [13, 37, 11, 13, 26, 54, 20, 43, 17];
const countries = [        
    { name: "CHINA", continent: 'Asia'},        
    { name: "africa", continent: 'Africa'},        
    { name: "scottland", continent: 'Europe'},        
    { name: "IND", continent: 'Asia'},        
    { name: "london", continent: 'Europe'} ];


    // let val =[]
    // for(let i=0; i<girls.length; i++){
    // if(girls[i].name.includes("m")){
    //     val.push(girls[i])
    // }
    // }
    // for(let i=0; i<ages.length; i++){
    // if(ages[i]>18){
    //     val.push(ages[i])
    // }
    // }
    // for(let i=0; i<countries.length; i++){
    // if(countries[i].continent ==="Asia"){
    //     val.push(countries[i])
    // }
    // }
    // for(let i=0; i<girls.length; i++){
    //     val.push(girls[i].age)
    // }
    // for(let i=0; i<ages.length; i++){
    // if(ages[i]>18){
    //     val.push("1")
    // }
    // else{
    //     val.push("0")
    // }
    // }
    for(let i=0; i<countries.length; i++){
    if(countries[i].continent ==="Africa"){
        countries[i].continent = "Asia"
    }
    val = countries
    }

// let val = girls.filter((value)=>value.name.includes("m"));
// let res = ages.filter((age)=>age>18)
// let cont = countries.filter((country)=>country.continent === "Asia")
// console.log(val);
// console.log(res);
// console.log(cont);
// let val = girls.map((girl)=>girl.age)
// let res = ages.map((age)=>(age>18)?age=1:age=0)
// let cont = countries.map((country)=>{
//     if(country.continent === "Africa"){
//         country.continent = "Asia"
//     }
//     return country
// })
// console.log(val);
// console.log(res);
// console.log(cont);
// console.log(val)