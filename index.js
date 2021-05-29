//jshint esversion:6
const x = document.querySelectorAll(".col");
var turn = true;
for(const item of x)
{
  item.addEventListener('click',function()
{
  if(item.classList[5] === 'x' || item.classList[5] === 'o')
  {
    alert("dont click on occupied block");
    return;
  }
  if(turn)
  {
    item.classList.add("x");
    turn = !turn;
  }
  else
  {
    item.classList.add("o");
    turn = true;
  }

  console.log(item.classList);
  const topleft = x[0].classList[5];
  const topmiddle = x[1].classList[5];
  const topright = x[2].classList[5];
  const middleleft = x[3].classList[5];
  const middlemiddle = x[4].classList[5];
  const middleright = x[5].classList[5];
  const bottomleft = x[6].classList[5];
  const bottommiddle = x[7].classList[5];
  const bottomright = x[8].classList[5];
//top row
  if(topleft && topleft === topmiddle && topleft === topright)
  {
    alert(topright +" is a winner");
    location.reload();
  }
  //bottom row
  else if(bottomleft && bottomleft === bottommiddle && bottommiddle === bottomright)
  {
    alert(bottomleft+ " is a winner");
    location.reload();
  }
  // first col
  else if(topleft && topleft === middleleft && topleft === bottomleft)
  {
    alert(topleft+ " is a winner");
    location.reload();
  }
  //middle row
  else if(middleleft && middleleft === middlemiddle && middleleft === middleright)
  {
    alert(middleleft+" is a winner");
    location.reload();
  }
  //second col
  else if(topmiddle && topmiddle === middlemiddle && topmiddle === bottommiddle)
  {
    alert(topmiddle+" is a winner");
      location.reload();
  }
  //third col
  else if(topright && topright === middleright && topright === bottomright)
  {
    alert(topright+" is a winner");
    location.reload();
  }
  //top-right diagonal
  else if(topright && topright === middlemiddle && middlemiddle === bottomleft)
  {
    alert(topright+" is a winner");
    location.reload();
  }
  //top-left diagonal
  else if(topleft && topleft === middlemiddle && middlemiddle === bottomright)
  {
    alert(topleft+" is a winner");
    location.reload();
  }
});
const reset = document.querySelector(".inp")
reset.addEventListener('click',function()
{
  location.reload();
});
}
