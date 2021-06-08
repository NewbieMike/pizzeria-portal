import { connect } from 'react-redux';
import Waiter from './Waiter';
import { fetchFromAPI, changeStatusAPI } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: state.tables.data,
  loading: state.tables.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  changeStatus: (tableId, status) => dispatch(changeStatusAPI(tableId, status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);