// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails} = props
  const {title, amount, type} = transactionDetails
  return (
    <li className="transaction-item-container">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
      <button type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          className="delete-icon"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
