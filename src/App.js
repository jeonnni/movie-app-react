import styles from "./App.module.css"
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [conversion, setConversion] = useState(0);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json); // 코인 리스트 저장

        // 데이터가 있다면 첫 번째 코인(json[0])의 가격을 초기값으로 설정
        if(json && json.length > 0){
          setConversion(Number(json[0].quotes.USD.price));
        }

        setLoading(false);
      });
  }, []);

  const onChange = (e) => {
    console.log(e.target.value);
    setConversion(Number(e.target.value));
  };
  const coin = (e) => {
    console.log(e.target.value);
    setPrice(Number(e.target.value));
  };

  return (
    <div className={styles.container}>
      {loading ? (
        // 로딩 중일 때 보여줄 화면
        <strong>loading...</strong>
      ) : (
        // 로딩이 끝났을 때 보여줄 화면
        <>
          <h1>CRYPTO CONVERTER ({coins.length})</h1>
          <select onChange={onChange} value={conversion}>
            {coins.map((item) => (
              <option key={item.id} value={item.quotes.USD.price}>
                {item.name} ({item.symbol}) : ${item.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <input
            type="number"
            placeholder="Amount in USD ($)"
            onChange={coin}
          ></input>
          <h2>
            {conversion !== 0 && price !== 0
              ? // toFixed(n) 소수점 아래 5자리까지
                `보유 가능 수량: ${((1 / conversion) * price).toFixed(5)} 개`
              : "가격을 선택하고 달러를 입력하세요."}
          </h2>
        </>
      )}
    </div>
  );


export default App;
