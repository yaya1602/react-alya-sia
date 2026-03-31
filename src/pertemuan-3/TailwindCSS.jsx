export default function Tailwindcss() {
  return (
    <div className="space-y-6">
      {/* <h1 class="shadow-lg bg-blue-200 m-4">WELCOME TO MY GAME</h1>
        <button className="bg-blue-500 text-white ml-4 px-6 py-3 rounded shadow-lg">Click Me</button>
        <Spacing title="Card" content="Yaya" /> */}
      <h1
        className="text-4xl font-extrabold text-center mt-6 
               text-transparent bg-clip-text 
               bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 
               drop-shadow-[0_0_15px_#a855f7] animate-pulse"
      >
        🎮 WELCOME TO MY GAME
      </h1>

      <button
        className="ml-4 mt-6 px-6 py-3 rounded-xl 
                   bg-gradient-to-r from-purple-500 to-pink-500 
                   text-white font-semibold tracking-wide
                   shadow-[0_0_20px_#ec4899] 
                   hover:scale-110 hover:shadow-[0_0_35px_#ec4899] 
                   transition duration-300"
      >
        🚀 Start Game
      </button>

      <div className="mt-8">
        <Spacing title="🎯 Game Card" content="Ready to play!" />
      </div>
      <FlexboxGrid />
      <Typography />
      <BorderRadius />
      <BackgroundColors />
      <ShadowEffects />
    </div>
  );
}

// function FlexboxGrid(){
//     return (
//         <nav className="flex justify-between bg-gray-500 p-4 text-white">
//             <h1 className="text-lg font-bold">MyWebsite</h1>
//             <ul className="flex space-x-4">
//                 <li><a href="#">Home</a></li>
//                 <li><a href="#">About</a></li>
//                 <li><a href="#">Contact</a></li>
//             </ul>
//             <h1 className="text-lg font-bold">Logout</h1>
//         </nav>
//     )
// }

// function Spacing(props){
//     return (
//         <div className="bg-blue-100 shadow-lg p-6 m-4 rounded-lg">
//             <h2 className="text-lg font-semibold">{props.title}</h2>
//             <p className="mt-2 text-gray-600">{props.content}.</p>
//         </div>
//     )
// }

// function Typography(){
//     return (
//         <div className="p-4">
//             <h1 className="text-3xl font-bold text-blue-600">Tailwind Typography</h1>
//             <p className="text-gray-600 text-lg mt-2">Belajar Tailwind sangat menyenangkan dan cepat!</p>
//         </div>
//     )
// }

// function BorderRadius(){
//     return (
//         <button className="border-2 border-blue-500 text-blue-500 ml-4 px-4 py-2 rounded-lg"> Klik Saya </button>
//     )
// }

// function BackgroundColors(){
//     return(
//         <div className="bg-blue-400 text-white p-6 m-6 rounded-lg shadow-lg">
//             <h3 className="text-xl font-bold">Tailwind Colors</h3>
//             <p className="mt-2">Belajar Tailwind itu seru dan fleksibel!</p>
//         </div>
//     )
// }

// function ShadowEffects(){
//     return (
//         <div className="bg-gray-400 shadow-lg p-6 rounded-lg hover:shadow-md transition">
//             <h3 className="text-xl font-semibold">Hover me!</h3>
//             <p className="text-gray-600 mt-2">Lihat efek bayangan saat hover.</p>
//         </div>
//     )
// }
function FlexboxGrid() {
  return (
    <div className="space-y-8 p-6 text-white">
      {/* Flexbox */}
      <div className="flex gap-4 bg-black/60 p-6 rounded-xl border border-cyan-400 shadow-[0_0_20px_#22d3ee]">
        <div className="bg-cyan-500 p-4 rounded-lg hover:scale-110 transition">
          Top Up
        </div>
        <div className="bg-blue-500 p-4 rounded-lg hover:scale-110 transition">
          Diamond
       
          
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-4 bg-black/60 p-6 rounded-xl border border-pink-400 shadow-[0_0_20px_#ec4899]">
        <div className="bg-pink-500 p-4 rounded-lg text-center">Character</div>
        <div className="bg-purple-500 p-4 rounded-lg text-center">Inventory⚡</div>
        <div className="bg-blue-500 p-4 rounded-lg text-center">Event🚀</div>
      </div>
    </div>
  );
}

function Typography() {
  return (
    <div className="p-6 space-y-3 text-white bg-black rounded-xl shadow-[0_0_20px_#9333ea]">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 animate-pulse">
        GAME MODE
      </h1>

      <h2 className="text-xl text-cyan-400 tracking-widest">
        Go Fight with your friends
      </h2>

      <p className="text-sm text-purple-400 italic">Ready to play 🚀</p>
    </div>
  );
}

function Spacing() {
  return (
    <div className="p-8 m-6 bg-gradient-to-br from-black via-purple-900 to-black text-white rounded-xl shadow-[0_0_25px_#9333ea]">
      <p className="mb-6 text-lg tracking-wide">⚡By One with your frined (Player 1)</p>
      <p className="mt-4 text-purple-300">🔥 Invite (2 players)</p>
      

      <div className="flex justify-center mt-6">
  <div className="px-4 py-2 
                  bg-purple-500/40 backdrop-blur 
                  rounded-lg border border-purple-400 
                  shadow-[0_0_15px_#a855f7] 
                  hover:scale-105 transition">
    🎯 Gas!
  </div>
</div>
    </div>
  );
}

function BorderRadius() {
  return (
    <div className="flex gap-6 p-6">
      <div className="bg-blue-800 p-6 rounded-md shadow-[0_0_15px_#9333ea] hover:scale-105 transition">
        Slow
      </div>

      <div className="bg-gray-400 p-6 rounded-xl shadow-[0_0_20px_#ec4899] hover:scale-105 transition">
        Higth
      </div>

      <div className="bg-cyan-500 p-6 rounded-full shadow-[0_0_25px_#22d3ee] hover:scale-110 transition">
        Hard
      </div>
    </div>
  );
}

function BackgroundColors() {
  return (
    <div className="flex gap-6 p-6">
      <div className="bg-gradient-to-r from-pink-500 to-red-500 p-6 text-white rounded-xl shadow-[0_0_20px_#f43f5e] hover:scale-105 transition">
        🔥 Team
      </div>

      <div className="bg-gradient-to-r from-green-400 to-cyan-500 p-6 text-white rounded-xl shadow-[0_0_20px_#22d3ee] hover:scale-105 transition">
        🌊 Solo
      </div>

      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-6 text-white rounded-xl shadow-[0_0_20px_#8b5cf6] hover:scale-105 transition">
        ⚡ Global
      </div>
    </div>
  );
}

function ShadowEffects() {
  return (
    <div className="flex gap-8 p-8 bg-black">
      <div className="p-6 bg-gray-900 text-white rounded-xl shadow-[0_0_10px_#22d3ee]">
        Low Glow
      </div>

      <div className="p-6 bg-gray-900 text-white rounded-xl shadow-[0_0_25px_#a855f7]">
        Medium Glow
      </div>

      <div className="p-6 bg-gray-900 text-white rounded-xl shadow-[0_0_40px_#ec4899] animate-pulse">
        High Glow
      </div>
    </div>
  );
}
