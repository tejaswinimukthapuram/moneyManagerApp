import {Component} from 'react'

import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    transactionList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  onTitleChange = event => {
    this.setState({titleInput: event.target.value})
  }

  onAmountChange = event => {
    this.setState({amountInput: event.target.value})
  }

  onOptionIdChange = event => {
    this.setState({optionId: event.target.value})
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    console.log(optionId)
    const typeOption = transactionTypeOptions.find(
      each => each.optionId === optionId,
    )
    const {displayText} = typeOption
    console.log(typeOption)
    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  render() {
    console.log(transactionTypeOptions)
    const {transactionList} = this.state

    const balanceAmount = 0
    const incomeAmount = 0
    const expensesAmount = 0
    const {optionId} = this.state

    return (
      <div className="app-container">
        <div className="money-manager-welcome-card">
          <h1>Hi Richard</h1>
          <p>
            Welcome back to your{' '}
            <span className="money-manager-heading">Money Manager</span>
          </p>
        </div>
        <div className="money-details-container">
          <MoneyDetails
            balance={balanceAmount}
            income={incomeAmount}
            expenses={expensesAmount}
          />
        </div>
        <div className="form-history-container">
          <div className="form-container">
            <h1>Add Transaction</h1>
            <form>
              <label htmlFor="title">TITLE</label>
              <br />
              <input type="text" id="title" onChange={this.onTitleChange} />
              <br />
              <label htmlFor="amount">AMOUNT</label>
              <br />
              <input type="text" id="amount" onChange={this.onAmountChange} />
              <br />
              <label htmlFor="type">TYPE</label>
              <br />
              <select
                id="type"
                onChange={this.onOptionIdChange}
                value={optionId}
              >
                {transactionTypeOptions.map(eachOption => (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <br />
              <button type="submit" onClick={this.onAddTransaction}>
                ADD
              </button>
            </form>
          </div>
          <div className="history-container">
            <h1>History</h1>
            <div className="table-contents-container">
              <p>Title</p>
              <p>Amount</p>
              <p>Type</p>
            </div>
            <ul>
              {transactionList.map(each => (
                <TransactionItem transactionDetails={each} key={each.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
