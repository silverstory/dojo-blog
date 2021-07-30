import BlogList from './BlogList';
import useFetch from './useFecth';

const Home = () => {
  const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      {isPending && <div>Loading...</div> }
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>

    // {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    // {blogs && - is conditional templating in React
    //             it does dynamic checking if blogs is not
    //             null and already got data from endpoint
    //             logical && evaluates the left first
    //             if it is false, it never bothers with the right

  );
}

export default Home;


// Note: Run JSON Server using
//       npx json-server --watch data/db.json --port 8000

// <BlogList blogs={blogs.filter((blog) => blog.author === 'yoshi')} title="Yoshi's blogs"/>

// code for useState tutorial
// import { useState } from 'react';

// const Home = () => {

//   // let name = 'buyo';
//   const [name, setName] = useState('pang');
//   const [age, setAge] = useState(22);

//   // handleClick function automatically gains as the first parameter the event object e
//   const handleClick = (e) => {
//     setName('buyo');
//     setAge(24);
//   }

//   // const handleClickAgain = (name, e) => {
//   //   console.log(`hello ${name}`, e.target);
//   // }

//   return (
//     <div className="home">
//       <h2>Homepage</h2>
//       <p>{name} is { age  } years old</p>
//       <button onClick={handleClick}>Click me</button>
//       {/* <button onClick={(e) => handleClickAgain('pang', e)}>Click me again</button> */}
//     </div>
//   );
// }

// export default Home;