import { useEffect, useState } from "react";
import "./App.css";
import { getCurrencyDataTR } from "./services";
function App() {
  const [data, setData] = useState(false);

  useEffect(() => {
    getCurrencyDataTR
      .get()
      .then((res) => {
        setData(Object.values(res));
      })
      .catch((err) => console.log(err));
    console.log(data);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      getCurrencyDataTR
        .get()
        .then((res) => {
          setData(Object.values(res));
        })
        .catch((err) => console.log(err));
      console.log(data);
    }, 50000);
    return () => clearInterval(interval);
  }, [data]);
  function setTime(dateTime) {
    if (!dateTime) {
      return "00";
    }
    const time = dateTime.split(" ")[1];
    return time;
  }
  function setDate(dateTime) {
    if (!dateTime) {
      return "00";
    }
    const date = dateTime.split(" ")[0].split("-").reverse().join("/");

    return date;
  }
  return (
    <div className="bg-slate-900">
      <header id="header" className=" lg:h-40 h-24 lg:p-10 md:p-5 p-1 grid">
        <h1 className="text-center text-gray-300 lg:text-4xl sm:text-2xl text-xl  font-not">
          Canlı ALtın Kuru
        </h1>
        <span className="text-gray-300 font-semibold mt-2">
          Gücelleme Tarihi : {setDate(data[0])}
        </span>
        <span className="text-gray-300 font-semibold mt-2">
          Gücelleme Saati : {setTime(data[0])}
        </span>
      </header>
      <main className="grid lg:px-40 md:px-20 grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 mt-10  gap-4 pb-10">
        {data &&
          data.map((item, index) =>
            item === data[0] ? (
              ""
            ) : (
              <div
                key={index}
                className="flex mx-auto justify-center font-serif w-64"
              >
                <div className="block w-72 rounded-lg bg-slate-600 shadow-lg ">
                  <div className="p-6">
                    <h5
                      className="mb-2 text-xl font-extrabold leading-tight border-b
                    border-zinc-300 p-3 text-center text-zinc-300"
                    >
                      {item.Name}
                    </h5>
                    <ul className="mb-4 grid text-lg gap-2 text-zinc-300">
                      <li>Satış: {item.Selling}</li>
                      <li>Alış: {item.Buying}</li>
                    </ul>
                  </div>
                </div>
              </div>
            )
          )}
      </main>
    </div>
  );
}

export default App;
