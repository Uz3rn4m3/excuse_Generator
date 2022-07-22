window.onload = () => {
    document.querySelector('#btn').addEventListener("click", () => {  document.querySelector("#the-excuse").innerHTML = generateExcuse();
                                                                   })
  
    console.log("Hello Rigo from the console!");
  };
  
  let generateExcuse = () => {
    let pronoun = ["She", "He", "They", "The dog", "My fish"];
    let verb = ["ate my", "burried my", "destroyed my", "burned my", "stolen my"];
    let noun = ["paper", "boots", "keycard", "phone"];
    let adjective = ["big", "sticky", "heavy", "slimy"];
  
    let proIndx = Math.floor(Math.random() * pronoun.length);
    let verbIndx = Math.floor(Math.random() * verb.length);
    let nounIndx = Math.floor(Math.random() * noun.length);
    let adjectiveIndx = Math.floor(Math.random() * adjective.length);
  
    return (
      pronoun[proIndx] +
      " " +
      verb[verbIndx] +
      " " +
      adjective[adjectiveIndx] +
      " " +
      noun[nounIndx] +
      "!"
    );
  };