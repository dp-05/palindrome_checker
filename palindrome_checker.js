function palindrome(str) {
  
  let filtSymb = /[A-Za-z0-9]/g;
  let filtStr = str.match(filtSymb).toString().replace(/,/g, "");
  
  filtStr.replace(" ", "");
  filtStr = filtStr.toLowerCase();

  let arr = [];
  for (let i = 0; i < filtStr.length; i++)
  {
    arr.push(filtStr[i]);
  }

  arr.reverse();

  let finalStr = arr.join("");

  if (finalStr === filtStr)
  {  
    return true;
  }
  else
  {
    return false;
  }
}



palindrome("Panama");
