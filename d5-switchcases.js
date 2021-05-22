console.log("/n-----------< SWITCH CASE >-------------")

let user = "Mercelo"
let welcomeText 

if (user === "Mercelo"){
    welcomeText = "Hi Mercelo!"
} else if (user === "Jamal"){
    welcomeText = "Hello Jamal, hope you're well today"
} else if (user === "James"){
    welcomeText = "Hiya James, how's the day going?"
} else if (user === "Basheer"){
    welcomeText = "Hello! Well done for all you do"
} else {
    welcomeText = `Hello ${user}!`
}

console.log("IF-ELSE:", welcomeText)

switch (user){
    case "Marcelo": welcomeText = "Hi Marcelo!"; break
    case "Jamal": welcomeText = "Hello Jamal, hope you're well today"; break
    case "James": welcomeText = "Hiya James, how's the day going?"; break
    case "Basheer": welcomeText = "Hello! Well done for all you do"; break
    case "default":  welcomeText = `Hello ${user}!`; break
}

console.log("SWITCH-CASE:", welcomeText)

console.log("/n-----------< ENUMERATING A STRING >-------------")
let stringIWantToEnumerate = "Hello Strivers"
                              01234567
console.log(stringIWantToEnumerate [4]);

for (let i = 0; i < stringIWantToEnumerate.length; i++){
    let currentCharacter = stringIWantToEnumerate[i]
    console.log(currentCharacter)
}