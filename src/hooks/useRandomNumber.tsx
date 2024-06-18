export const randomNumberText = (finalNum: string, setNumber : React.Dispatch<React.SetStateAction<string>>) => {
    let count = 0;
    let newNum = "";
    const interval = setInterval(() => {
      count++;
      for (let i = 0; i < finalNum.length; i++) {
        newNum += Math.floor(Math.random() * 10);
      }
      setNumber(newNum);
      newNum = "";
      if (count === 20) {
        clearInterval(interval);
  
        setNumber("404");
      }
    }, 80);
  };