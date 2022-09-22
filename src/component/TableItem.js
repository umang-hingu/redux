const TableItem = (props) => {
  return (
    <tr>
      <th>{props.fname}</th>
      <th>{props.lname}</th>
      <th>{props.email}</th>
    </tr>
  );
};

export default TableItem;
