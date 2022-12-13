import { useEffect, useState } from "react";

function App() {
    // 로딩 상태 state
    const [loading, setLoading] = useState(true);
    // 코인 리스트 state
    const [coins, setCoins] = useState([]);
    // 내 보유 자산 state
    const [assets, setAssets] = useState(0);

    // 처음 1번 실행 - 코인 데이터 api 호출
    useEffect(() => {
        // api 호출 -> json 변환 -> coins 리스트 저장 & 로딩 상태 false
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((res) => res.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    }, []);
    // USD 입력값 setAssets
    const onChange = (event) => setAssets(event.target.value);

    return (
        <div>
            {/* 로딩 상태가 아닐 경우, coins 리스트 개수 표시 */}
            <h1>
                The Coins - Coin Tracker {loading ? "" : `(${coins.length})`}
            </h1>
            <label htmlFor="myDollar">내 보유 자산($)</label>
            <input
                id="myDollar"
                type="number"
                placeholder="My USD"
                value={assets}
                onChange={onChange}
            />
            <hr />
            {/* 로딩 상태일 경우 Loading 표시, 아닐 경우 코인 리스트 데이터 및 취득 가능 코인량 표시 */}
            {loading ? (
                <strong>Loading...</strong>
            ) : (
                <div>
                    <h4>
                        Coin(Symbol): USD price =&gt; exchange to your USD
                        (Symbol)
                    </h4>
                    <select>
                        <option>Select Coin!!</option>
                        {coins.map((coin) => (
                            <option key={coin.id}>
                                {coin.name} ({coin.symbol}): $
                                {coin.quotes.USD.price.toFixed(3)} =&gt;&nbsp;
                                {(assets / coin.quotes.USD.price).toFixed(3)} (
                                {coin.symbol})
                            </option>
                        ))}
                    </select>
                </div>
            )}
        </div>
    );
}

export default App;
