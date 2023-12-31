/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

function abbrevName(name){
    const s = name.split(" ")
    return s[0].toUpperCase().substr(0,1)+"."+s[1].toUpperCase().substr(0,1)
}