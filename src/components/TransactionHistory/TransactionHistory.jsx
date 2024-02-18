import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionTable}>
      <thead>
        <tr>
          <th className={css.tableHead}>Type</th>
          <th className={css.tableHead}>Amount</th>
          <th className={css.tableHead}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={css.tableLine} key={id}>
            <td className={css.tableBody}>{type}</td>
            <td className={css.tableBody}>{amount}</td>
            <td className={css.tableBody}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};

export default TransactionHistory;
