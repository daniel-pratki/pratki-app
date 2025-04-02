import React, { useState } from "react";

function App() {
  const [pratki, setPratki] = useState([]);
  const [novaPratka, setNovaPratka] = useState({
    klient: "",
    kurier: "Еконт",
    status: "Взета",
    prihod: "",
    razhod: ""
  });

  const addPratka = () => {
    setPratki([...pratki, novaPratka]);
    setNovaPratka({ klient: "", kurier: "Еконт", status: "Взета", prihod: "", razhod: "" });
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h1>Приложение за пратки</h1>
      <input placeholder="Клиент" value={novaPratka.klient} onChange={(e) => setNovaPratka({ ...novaPratka, klient: e.target.value })} />
      <input placeholder="Куриер" value={novaPratka.kurier} onChange={(e) => setNovaPratka({ ...novaPratka, kurier: e.target.value })} />
      <input placeholder="Статус" value={novaPratka.status} onChange={(e) => setNovaPratka({ ...novaPratka, status: e.target.value })} />
      <input placeholder="Приход" value={novaPratka.prihod} onChange={(e) => setNovaPratka({ ...novaPratka, prihod: e.target.value })} />
      <input placeholder="Разход" value={novaPratka.razhod} onChange={(e) => setNovaPratka({ ...novaPratka, razhod: e.target.value })} />
      <button onClick={addPratka}>Добави пратка</button>

      <ul>
        {pratki.map((p, i) => (
          <li key={i}>{p.klient} - {p.kurier} - {p.status} - {p.prihod}лв - {p.razhod}лв</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
