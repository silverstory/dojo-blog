import { useState } from 'react';

const Home = () => {

  // let name = 'buyo';
  const [name, setName] = useState('pang');
  const [age, setAge] = useState(22);

  // handleClick function automatically gains as the first parameter the event object e
  const handleClick = (e) => {
    setName('buyo');
    setAge(24);
  }

  // const handleClickAgain = (name, e) => {
  //   console.log(`hello ${name}`, e.target);
  // }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name} is { age  } years old</p>
      <button onClick={handleClick}>Click me</button>
      {/* <button onClick={(e) => handleClickAgain('pang', e)}>Click me again</button> */}
    </div>
  );
}

export default Home;