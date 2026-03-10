export default function HelloWorld(){
   const propsUserCard = {
        nama: "Goku",
        nim: "999999",
        tanggal: "2025-01-01"
    }

    return (
        <div className="card">
            <img src="./img/gambar.png" alt="logo" width="100%"  />
            <h1>Hello World</h1>
           

            <GreetingBinjai/>
            <QuoteText/>
            <UserCard
                nama="Alya"
                nim="2457301011"
                tanggal="2026-03-10"
            />

            <UserCard
                nama="Rehan"
                nim="24103122"
                tanggal="2026-03-10"
            />

            <UserCard{...propsUserCard}/>
        </div>
    )
}

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function GreetingBinjai(){
    return (
       <small className="card">Salam dari binjai</small>
    )
}

function UserCard(props){
    return (
        <div className="card">
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}