import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'
import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeComponent } from './style';
import { FormEvent, useState } from 'react';
import { useTransactions } from '../../hooks/transactionsContext';

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}:NewTransactionModalProps) {
    const {createTransaction} = useTransactions()

    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState("")
    const [type, setType] = useState('deposit')

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault()

        createTransaction({
            title,
             amount,
            category,
            type,
        })
        setTitle("")
        setAmount(0)
        setCategory("")
        setType("deposit")
        onRequestClose()
    }

    return (
        <Modal    
        isOpen={isOpen} 
       onRequestClose={onRequestClose}
       overlayClassName="react-modal-overlay"
       className='react-modal-content'
       > 
                <button 
                    type="button"
                    onClick={onRequestClose}
                    className="closeButton"
                    >
                    <img src={closeImg} alt="" />
                </button>
           
            <Container onSubmit={handleCreateNewTransaction}>
            <h1>Cadastrar transação</h1>
            <input  
            placeholder="Nome"
            value={title}
            onChange={e => setTitle(e.target.value)}
            />
            <input 
            type="number" 
            placeholder="Valor"
            value={amount}
            onChange={e => setAmount(Number(e.target.value))}
            />

                <TransactionTypeComponent>
                    <RadioBox 
                    type="button" 
                    onClick={() => setType('deposit')}
                    isActive={type === 'deposit'}
                    activeColor="green"
                    >
                        <img src={incomeImg} alt="" />
                        <p>Entrada</p>
                    </RadioBox>
                    <RadioBox 
                    type="button" 
                    onClick={() => setType('withdraw')}
                    isActive={type === 'withdraw'}
                    activeColor="red"
                    >
                        <img src={outcomeImg} alt="" />
                        <p>Saída</p>
                    </RadioBox>
                </TransactionTypeComponent>

                <input 
                type="text" 
                placeholder="Categoria"
                value={category}
                onChange={e => setCategory(e.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </Container>
            
        </Modal>
)}