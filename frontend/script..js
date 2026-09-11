const crosham = document.getElementsByClassName("crosham")[0];
const hambgr = document.getElementsByClassName("hambgr")[0];

// if(crosham){
//     crosham.addEventListener("click",(e)=>{
//         if(crosham.src.includes("images/navhambgr.png")){
//         }
//         else{
//             crosham.src = "images/crossham.png"
//         }
//     });
// }
const crosham = document.getElementsByClassName("crosham")[0];

if (crosham) {
  crosham.addEventListener("click", (e) => {
    // Check if the current src contains the cross image
    if (crosham.src.includes("crossham.png")) {
      crosham.src = "images/navhambgr.png";
    } else {
      crosham.src = "images/crossham.png";
    }
  });
}