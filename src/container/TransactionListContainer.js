import { connect } from 'react-redux'
import TransactionList from '../components/main/TransactionList'
import { setTransactionList } from '../actions/transactionActions'

const mapStateProps = state => {
    const { ids, entities } = state.transactions
    const transaction = ids.map(id => entities[id])
    
    return {transaction}
}

const mapDispatchToProps = {
    setTransactionList
}

export default connect (mapStateProps, mapDispatchToProps)(TransactionList)