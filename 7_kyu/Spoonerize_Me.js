function spoonerize(str) {
    const words = str.split(' ');
   const letter1 = words[0][0];
   const letter2 = words[1][0];
   const ending1 = words[0].substring(1);
   const ending2 = words[1].substring(1);
   return letter2 + ending1 + ' ' + letter1 + ending2;
 };