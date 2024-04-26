import BalanceData from "@/utils/balance.json"
export default function Brands() {
    const Today = Object.keys(BalanceData.balance)[0]
    const Yesterday = Object.keys(BalanceData.balance)[1]
    const todayData = BalanceData.balance.today
    const yesterdayData = BalanceData.balance.yesterday
    return(
        <div>
            <table>
                <tbody>
                    <tr className="border-bottom">
                        <p className="gray-text padding-left padding-bottom capitalize">{Today}</p>
                    </tr>
                    {todayData.map((today, index) => (
                    <tr  key={index}>
                         <td className="img-td">
                             <img alt="brand-image" src={today.image}/>
                         </td>
                         <td>
                             <p className="bold-text">{today.company}</p>
                             <p className="gray-text">{today.createdAt}</p>
                         </td>
                         <td className="text-alignment-right">
                             <p className={`bold-text ${today.amount.indexOf("-") !== -1 ? "" : "green-text"}`}>{today.amount}</p>
                             <p className="gray-text">{today.details}</p>
                         </td>
                     </tr>
                    ))}
                    <tr className="border-bottom">
                        <p className="gray-text padding-left padding-bottom capitalize">{Yesterday}</p>
                    </tr>
                    {yesterdayData.map((yesterday, index) => (
                        <tr key={index}>
                            <td className="img-td">
                                <img alt="brand-image" src={yesterday.image}/>
                            </td>
                            <td>
                                <p className="bold-text">{yesterday.company}</p>
                                <p className="gray-text">{yesterday.createdAt}</p>
                            </td>
                            <td className="text-alignment-right">
                                <p className={`bold-text ${yesterday.amount.indexOf("-") !== -1 ? "" : "green-text"}`}>{yesterday.amount}</p>
                                <p className="gray-text">{yesterday.details}</p>
                            </td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}