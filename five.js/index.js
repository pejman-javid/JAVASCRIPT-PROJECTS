function fill(length) {
    const randomArray = [];
  
    for (let i = 0; i < length; i++) {
      const randomNumber = Math.floor(Math.random() * 1000);
      const randomDate = new Date(Math.random() * Date.now()); 
      const randomWord = generateRandomWord(); 
      const randomObject = {
        number: randomNumber,
        date: randomDate,
        word: randomWord,
      };
  
      randomArray.push(randomObject);
    }
  
    return randomArray;
  }
  
  function generateRandomWord() {
    const words = ['asus', 'apple', 'dell', 'lenovo', 'hp'];
    const randomWordIndex = Math.floor(Math.random() * words.length);
    return words[randomWordIndex];
  }
  
  const randomArray = fill(8);
  console.log(randomArray);
   