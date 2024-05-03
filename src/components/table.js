import "@/assets/table.css"
import TransactionData from "@/utilis/transaction.json"
export default function Table() {
    console.log(TransactionData)
    return(
        <div className="main-style">
        <h1>Transactions</h1>
        <table>
            <tbody>
                {TransactionData.transactions.map((transaction, index) => (
                <tr key={index}>
                    <td className="img-td">
                        <img src={transaction.image} alt="user-photo"/>
                    </td>
                    <td>{transaction.name}</td>
                    <td className="align-text-center">{transaction.createdAt}</td>
                    <td className={`align-text-right ${transaction.amount.indexOf("-") !== -1 ? "red-text": "green-text"}`}>{transaction.amount}</td>
                </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}