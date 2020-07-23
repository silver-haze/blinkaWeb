const logoBlinka = document.querySelectorAll("#logoBlinka path");

for(let i = 0; i<logoBlinka.length; i++){
    console.log (`Letter ${i} is ${logoBlinka[i].getTotalLength()}`);
}