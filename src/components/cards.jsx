import Link from "next/link";

function Cards({ arrayCards }) {
  return (
    <div className="app">
      <h1>App</h1>
      <div style={{ display: "flex", justifyContent: "center", flexFlow:"row wrap", gap: "10px", }}>
        {arrayCards.map((i) => (
          <Link key={i.id} href={`/users/${i.id}`}>
            <div className="card">
              <h2 className="text-center pb-3">{i.first_name}</h2>
              <div>
                <img src={i.avatar} className="rounded-full"></img>
              </div>
            </div>
          </ Link>
        ))}
      </div>
    </div>
  );
}

export default Cards;
