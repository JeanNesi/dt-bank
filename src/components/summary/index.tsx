import { Container } from "./style";
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"
import { useTransactions } from "../../hooks/transactionsContext";

export function Summary(){
    const {transactions} = useTransactions();

    const summary = transactions.reduce((acc, transaction) => {
        console.log(transaction)
        if(transaction.type === 'deposit') {
            acc.deposits += transaction.amount
            acc.total += transaction.amount
        }else {
            acc.withdraws += transaction.amount
            acc.total -= transaction.amount
        }
        return acc
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    })

    return (
       <Container>
           <div>
            <header>
                <p>Entradas</p>
                <img src={incomeImg} alt="Entradas" />
            </header>
            <strong>{summary.deposits.toLocaleString('pt-br', {     style: 'currency',     currency: 'BRL', })}</strong>
           </div>

           <div>
            <header>
                <p>Saídas</p>
                <img src={outcomeImg} alt="Saidas" />
            </header>
            <strong>-{summary.withdraws.toLocaleString('pt-br', {     style: 'currency',     currency: 'BRL', })}</strong>
           </div>

           <div
           className="totalBox"
           >
            <header>
                <p>Total</p>
                <img src={totalImg} alt="Total" />
            </header>
            <strong>{summary.total.toLocaleString('pt-br', {     style: 'currency',     currency: 'BRL', })}</strong>
           </div>

       </Container>
    )
}