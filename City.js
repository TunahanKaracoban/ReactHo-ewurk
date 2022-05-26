const person1 ={
    name:"tunahan",
    surname:"karaçoban",
    age:"26",
    location:"istanbul",
    gender:"man",
    score:10,
    workingDays:90,
    books:9

}       
const person2 ={
    name:"alican",
    surname:"pamuk",
    age:"27",
    location:"istanbul",
    gender:"man",
    score:17,
    workingDays:17,
    books:2
}
const person3 ={
    name:"öznur",
    surname:"köse",
    age:"25",
    location:"trabzon",
    gender:"woman",
    score:20,
    workingDays:64,
    books:178
}    
const person4 ={
    name:"ayşe",
    surname:"yılmaz",
    age:"30",
    location:"izmir",
    gender:"woman",
    score:20,
    workingDays:64,
    books:178
}    
const person5 ={
    name:"mustafa",
    surname:"karaçoban",
    age:"19",
    location:"istanbul",
    gender:"woman",
    score:20,
    workingDays:64,
    books:178
}    
const person6 ={
    name:"nadir",
    surname:"korkut",
    age:"29",
    location:"istanbul",
    gender:"man",
    score:20,
    workingDays:64,
    books:178
}    
const person7 ={
    name:"tarık",
    surname:"demirci",
    age:"24",
    location:"ankara",
    gender:"man",
    score:20,
    workingDays:64,
    books:178
}    
const person8 ={
    name:"burak",
    surname:"yüksel",
    age:"32",
    location:"ankara",
    gender:"man",
    score:20,
    workingDays:64,
    books:178
}    
const person9 ={
    name:"melike",
    surname:"günsav",
    age:"33",
    location:"trabzon",
    gender:"woman",
    score:20,
    workingDays:64,
    books:178
}  
const person10 ={
    name:"hüseyin",
    surname:"aydın",
    age:"28",
    location:"izmir",
    gender:"woman",
    score:20,
    workingDays:64,
    books:178
}      
const people=[person1,person2,person3,person4,person5,person6,person7,person8,person9,person10] 

let group="location" // location'a göre grupla
let groupedLocation=people.reduce((prive,person)=>{

    let key=person[group] //people içerisinde group(location) bul

    if(!prive[key]){  // Burada şunu kontrol ediyoruz prive yani toplayıcımda key'e ait bir şey var mı 
        prive[key]=[] // yoksa boş bir dizi oluştur
    }
    prive[key].push(person)
    return prive
},{})
console.log(groupedLocation)
