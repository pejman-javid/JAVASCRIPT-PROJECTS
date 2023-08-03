function celToFar(celsius) 
{
  const cTemp = celsius;
  const cToFahr = cTemp * 9 / 5 + 32;
  const temperature = cTemp+'\xB0C is ' + cToFahr + ' \xB0F (:';
    console.log(temperature);
}

celToFar(50);