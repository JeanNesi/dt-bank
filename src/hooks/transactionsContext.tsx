import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface TransactionsProps {
    id: number;
    title: string;
    type: string;
    amount: number;
    category: string;
    createdAt: string;
}

interface TransactionsInputs{
    title: string;
    type: string;
    amount: number;
    category: string;
}

interface TransactionsProviderProps {
    children: ReactNode
}

interface TransactionsContextData{
    transactions: TransactionsProps[],
    createTransaction: (transaction: TransactionsInputs) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionsProvider( {children}: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<TransactionsProps[]>([])

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    }, [])

    async function createTransaction(transactionInput: TransactionsInputs){
        const response = await api.post('/transactions', {...transactionInput, createdAt: new Date()})
        const { transaction } = response.data

        setTransactions([
            ...transactions,
            transaction
        ])
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
    }
    
    export function useTransactions() {
        const context = useContext(TransactionsContext)

        return context
    }