export default function Tailwindcss() {
  return (
    <div className="space-y-6">
        <h1 class="shadow-lg bg-blue-200 m-4">Belajar Tailwind CSS 4</h1>
        <button className="bg-blue-500 text-white ml-4 px-6 py-3 rounded shadow-lg">Click Me</button>
        <Spacing title="Card" content="Yaya" />
        <FlexboxGrid />
        <Typography />
        <BorderRadius />
        <BackgroundColors />
        <ShadowEffects />
    </div>
  );
} 

function FlexboxGrid(){
    return (
        <nav className="flex justify-between bg-gray-500 p-4 text-white">
            <h1 className="text-lg font-bold">MyWebsite</h1>
            <ul className="flex space-x-4">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <h1 className="text-lg font-bold">Logout</h1>
        </nav>
    )
}

function Spacing(props){
    return (
        <div className="bg-blue-100 shadow-lg p-6 m-4 rounded-lg">
            <h2 className="text-lg font-semibold">{props.title}</h2>
            <p className="mt-2 text-gray-600">{props.content}.</p>
        </div>
    )
}

function Typography(){
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold text-blue-600">Tailwind Typography</h1>
            <p className="text-gray-600 text-lg mt-2">Belajar Tailwind sangat menyenangkan dan cepat!</p>
        </div>
    )
}

function BorderRadius(){
    return (
        <button className="border-2 border-blue-500 text-blue-500 ml-4 px-4 py-2 rounded-lg"> Klik Saya </button>
    )
}

function BackgroundColors(){
    return(
        <div className="bg-blue-400 text-white p-6 m-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Tailwind Colors</h3>
            <p className="mt-2">Belajar Tailwind itu seru dan fleksibel!</p>
        </div>
    )
}

function ShadowEffects(){
    return (
        <div className="bg-gray-400 shadow-lg p-6 rounded-lg hover:shadow-md transition">
            <h3 className="text-xl font-semibold">Hover me!</h3>
            <p className="text-gray-600 mt-2">Lihat efek bayangan saat hover.</p>
        </div>
    )
}