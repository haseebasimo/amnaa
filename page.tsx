"use client"
import Head from 'next/head';
import React, { useState } from 'react';

const Home: React.FC = () => {
  const [response, setResponse] = useState<string | null>(null);

  const handleResponse = (answer: string) => {
    setResponse(answer);
  };

  return (
    <div className="bg-blue-100 h-screen flex items-center justify-center">
      <Head>
        <title> Dear AMNA</title>
        <meta name="description" content="A friendship invitation page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-4">Amna, do you want to be my friend? 🤝</h1>
        {!response ? (
          <div>
            <p className="mb-6 text-gray-700">You have two options:</p>
            <div className="flex justify-around">
              <button
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                onClick={() => handleResponse('yes')}
              >
                Yes ❤️
              </button>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                onClick={() => handleResponse('no')}
              >
                No
              </button>
            </div>
          </div>
        ) : (
          <div>
            {response === 'yes' ? (
              <div>
                <h2 className="text-xl font-semibold text-green-600">Yay!🎉</h2>
                <p className="text-gray-700 mt-2">I’m so excited to be your friend!</p>
              </div>
            ) : (
              <div>
                <h2 className="text-xl font-semibold text-red-600">shut the fuck up</h2>
                <p className="text-gray-700 mt-2"> I thought that you might like me</p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 // pages/index.tsx
 // pages/index.tsx
  // pages/index.tsx
//   "use client"
// import Head from 'next/head';
// import React, { useState } from 'react';

// const Home: React.FC = () => {
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   return (
//     <div>
//       <Head>
//         <title>Wanna Be My Friend?</title>
//         <meta name="description" content="A quirky friendship invitation page" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="container">
//         <h1 className="title">Wanna Be My Friend? 🤝</h1>
//         {!submitted ? (
//           <form onSubmit={handleSubmit} className="form">
//             <div className="field">
//               <label htmlFor="name">Your Name</label>
//               <input type="text" id="name" name="name" required />
//             </div>

//             <div className="field">
//               <label htmlFor="hobby">Favorite Hobby</label>
//               <input type="text" id="hobby" name="hobby" required />
//             </div>

//             <div className="field">
//               <label htmlFor="question">Why do you want to be my friend?</label>
//               <textarea id="question" name="question" rows={4} required></textarea>
//             </div>

//             <button type="submit" className="btn">Yes, Let’s Be Friends!</button>
//           </form>
//         ) : (
//           <div className="thanks">
//             <h2>Thank You! 🎉</h2>
//             <p>I’ll get back to you soon. Meanwhile, stay awesome! 😊</p>
//           </div>
//         )}
//       </main>

//       <style jsx>{`
//         .container {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           height: 100vh;
//           text-align: center;
//           background: #f0f8ff;
//           font-family: Arial, sans-serif;
//           padding: 1rem;
//         }

//         .title {
//           font-size: 2rem;
//           margin-bottom: 1rem;
//         }

//         .form {
//           background: white;
//           padding: 1.5rem;
//           border-radius: 10px;
//           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//           width: 100%;
//           max-width: 400px;
//         }

//         .field {
//           margin-bottom: 1rem;
//           text-align: left;
//         }

//         .field label {
//           display: block;
//           margin-bottom: 0.5rem;
//           font-size: 0.9rem;
//         }

//         .field input,
//         .field textarea {
//           width: 100%;
//           padding: 0.5rem;
//           border: 1px solid #ccc;
//           border-radius: 5px;
//           font-size: 1rem;
//         }

//         .btn {
//           background: #0070f3;
//           color: white;
//           padding: 0.75rem;
//           border: none;
//           border-radius: 5px;
//           cursor: pointer;
//           font-size: 1rem;
//           width: 100%;
//         }

//         .btn:hover {
//           background: #005bb5;
//         }

//         .thanks {
//           background: white;
//           padding: 1.5rem;
//           border-radius: 10px;
//           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//           text-align: center;
//           width: 100%;
//           max-width: 400px;
//         }

//         .thanks h2 {
//           margin-bottom: 1rem;
//         }

//         @media (max-width: 480px) {
//           .title {
//             font-size: 1.8rem;
//           }

//           .form {
//             padding: 1rem;
//           }

//           .btn {
//             padding: 0.5rem;
//           }

//           .field label {
//             font-size: 0.8rem;
//           }

//           .field input,
//           .field textarea {
//             font-size: 0.9rem;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Home;

























// "use client"
// import { url } from 'inspector';
// import { useState } from 'react';

//  export default function Home (){
//   return(
//     <main className='w-screen h-screen relative'>
//     <div className='flex items-center w-full h-full '
//     style={{ 
//       backgroundImage:"url('1_kqMvzofsQVeBPYBs0RGwng.webp')",
//       backgroundSize:"full",
//       backgroundPosition:"center"
      
//     }}
//     >
//       <h1 className='flex justify-between items-center '>
//        Dear Amna Do you wanna be my friend
//       </h1>

//     </div>
//     </main>
//   )
//  }

















// export default function Home() {
//   return (
//     <div>
//       <ul>
//       <Link href="/"><li>Home</li></Link>
//       <Link href="/about-us"><li>About</li></Link>
//       <Link href="/career">
//       <li>Career</li>
//       <Link href="/about-us/ali/education"><li>Ali</li></Link>
//       </Link>
//     </ul>
//     <h1>This is home page</h1>
//       <h1>This is home page</h1>
//     </div>
//   );
// }
