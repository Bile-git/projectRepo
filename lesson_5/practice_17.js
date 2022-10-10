function generateUUID (){
let characters = [0, 1, 2, 3, 4,5, 6, 7, 8, 9 ,'a', 'b', 'c', 'd', 'e', 'f'];
let sections =[8, 4, 4, 12];
let uuid = '';
sections.forEach((section, sectionIdex)=>{
    for(let index =0; index <= section;index++){
let randomIndex = Math.floor(Math.random()*  characters.length)
uuid += characters[randomIndex];}
if(sectionIdex < sections.length -1){
    uuid += '-';
}
})
return uuid;

}
console.log(generateUUID());