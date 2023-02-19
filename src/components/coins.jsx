import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCoins } from '../redux/coinSlice'
import "./style.css"

export default function Coins() {
    const dispatch = useDispatch()
    const { coins, isLoding } = useSelector(state => state.coinsStore)

    if (isLoding) {
        console.log(coins)
        console.log(isLoding)
    }

    useEffect(() => {
        dispatch(getCoins())
    }, [dispatch])


    return (
        <div>
            {!coins && <h1>loading...</h1>}

            {/* {coins && coins.map(item => ( */}
            {coins && coins.map(item => (
                <table>
                    <thead>
                        <th>#</th>
                        <th>name</th>
                        <th>price</th>
                        <th>15min %</th>
                        <th>1h %</th>
                        <th>24h %</th>
                        <th>7d %</th>
                        <th>30d %</th>
                        {/* <th>1y %</th> */}
                        <th>Market Cap</th>
                        <th>Circulating Supply</th>
                    </thead>
                    <tbody>
                    {/* coins.map(item => ( */}
                        {/* {coins && coins.map(item => ( */}
                        <tr key={item.id}>
                            <td>{item.rank}</td>
                            {/* <td><img src={`https://cryptoicons.org/api/icon/${(item.symbol).toLowerCase()}/16`} alt="" /></td> */}
                            {/* <td><img src={`https://assets.coincap.io/assets/icons/${(item.symbol).toLowerCase()}@2x.png`} alt="" /></td> */}
                            <td>
                                <div>
                                    <img src={`https://assets.coincap.io/assets/icons/${(item.symbol).toLowerCase()}@2x.png`} alt="" />
                                    <span className='name'>{item.name}</span>
                                    <span className='sym'>{item.symbol}</span>
                                </div>
                            </td>
                            <td>$ {(item.quotes.USD.price).toFixed(2)}</td>
                            {/* 15min  */}
                            {(item.quotes.USD.percent_change_15m) >= 0 ?
                                <td className='pos'>+{(item.quotes.USD.percent_change_15m).toFixed(2)} %</td>
                                :
                                <td className='neg'>{(item.quotes.USD.percent_change_15m).toFixed(2)} %</td>
                            }
                            {/* 1h  */}
                            {(item.quotes.USD.percent_change_1h) >= 0 ?
                                <td className='pos'>+{(item.quotes.USD.percent_change_1h).toFixed(2)} %</td>
                                :
                                <td className='neg'>{(item.quotes.USD.percent_change_1h).toFixed(2)} %</td>
                            }
                            {/* 24h  */}
                            {(item.quotes.USD.percent_change_24h) >= 0 ?
                                <td className='pos'>+{(item.quotes.USD.percent_change_24h).toFixed(2)} %</td>
                                :
                                <td className='neg'>{(item.quotes.USD.percent_change_24h).toFixed(2)} %</td>
                            }
                            {/* 7d  */}
                            {(item.quotes.USD.percent_change_7d) >= 0 ?
                                <td className='pos'>+{(item.quotes.USD.percent_change_7d).toFixed(2)} %</td>
                                :
                                <td className='neg'>{(item.quotes.USD.percent_change_7d).toFixed(2)} %</td>
                            }
                            {/* 30d  */}
                            {(item.quotes.USD.percent_change_30d) >= 0 ?
                                <td className='pos'>+{(item.quotes.USD.percent_change_30d).toFixed(2)} %</td>
                                :
                                <td className='neg'>{(item.quotes.USD.percent_change_30d).toFixed(2)} %</td>
                            }

                            {/* <td className='neg'>{(item.quotes.USD.percent_change_1h).toFixed(2)} %</td> */}
                            {/* <td>{(item.quotes.USD.percent_change_24h).toFixed(2)} %</td> */}
                            {/* <td>{(item.quotes.USD.percent_change_7d).toFixed(2)} %</td> */}
                            {/* <td>{(item.quotes.USD.percent_change_30d).toFixed(2)} %</td> */}
                            {/* <td>{(item.quotes.USD.percent_change_1y).toFixed(2)} %</td> */}
                            < td > ${(item.quotes.USD.market_cap).toLocaleString("en-US")}</td>
                            <td>{(item.circulating_supply).toLocaleString("en-US")} <span className='s'>{item.symbol}</span></td>
                            {/* <td>{(item.quotes.USD.market_cap_change_1h).toFixed(2)}</td> */}
                            {/* <td>{item.name}</td>
                            <td>{item.quotes.USD.market_cap_change_24h}</td> */}
                        </tr>

                    </tbody>
                </table >
            ))}
        </div >
    )
}
