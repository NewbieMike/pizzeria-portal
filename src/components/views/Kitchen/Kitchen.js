import React from 'react';
import styles from './Kitchen.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoContent = [
  {orderTime: '11:23', tableNumber: '1', menu: ['1','2','3'], id: '1', status: 'free', order: null},
  {orderTime: '11:28', tableNumber: '2', menu: ['1','2','3'], id: '2', status: 'thinking', order: null},
  {orderTime: '11:53', tableNumber: '3', menu: ['1','2','3'], id: '3', status: 'ordered', order: 123},
  {orderTime: '12:23', tableNumber: '4', menu: ['1','2','3'], id: '4', status: 'prepared', order: 234},
  {orderTime: '13:13', tableNumber: '5', menu: ['1','2','3'], id: '5', status: 'delivered', order: 345},
  {orderTime: '13:43', tableNumber: '1', menu: ['1','2','3'], id: '6', status: 'paid', order: 456},
];

const Kitchen = () => {

  return (
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Order Time</TableCell>
            <TableCell>Order Number</TableCell>
            <TableCell>Table Number</TableCell>
            <TableCell>Menu</TableCell>
            <TableCell>Table Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>
                {row.orderTime}
              </TableCell>
              <TableCell>
                {row.order && (
                  <Button to={`${process.env.PUBLIC_URL}/panel/waiter/ordering/order/${row.order}`}>
                    {row.order}
                  </Button>
                )}
              </TableCell>
              <TableCell>
                {row.tableNumber}
              </TableCell>
              <TableCell>
                {row.menu.map(dish => (
                  <div key={dish}>{dish}</div>
                ))}
              </TableCell>
              <TableCell>
                {row.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Kitchen;
