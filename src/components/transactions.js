import "@/assets/styles.css"
import Data from "@/utils/balance.json"
export default function Transactions() {
    const organizedData = Data.balance.sort(function(a, b) {
        if(a.createdAt > b.createdAt){
            return 1
        }
        if(a.createdAt < b.createdAt){
            return -1
        }
        return 0
    })
       
    console.log(organizedData)
    return(
        <div>
            <h1>Transactions</h1>
            <table>
                <thead>
                    <tr>
                        <th className="align-left">Data</th>
                        <th className="align-left">Payment method</th>
                        <th className="align-right">Operation</th>
                        <th className="align-right">Amount ($)</th>
                    </tr>
                </thead>
                <tbody>
                    {organizedData.map((account, index)=>(
                        <tr key={index}>
                            <td>{account.createdAt},</td>
                            <td>
                                <img src={account.image} alt="company-logo"/>
                                <p>{account.name}</p>
                            </td>
                            <td className="align-right">
                                <div className={`operation-div ${account.operation === "FREE TRIAL" ? "free-trial" : account.operation === "COMPENSATION" ? "compensation": "purchase"}`}>{account.operation}</div>
                            </td>
                            <td className={`align-right bold-text ${account.amount.indexOf("-") === -1 ? "amount-color": null}`}>{account.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}