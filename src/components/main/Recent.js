const Recent = () => {
  return (
    <div className="col-span-2">
      <h2>recent Sales</h2>
      <table className="table-fixed">
        <tr>
          <th>Date</th>
          <th>Customer</th>
          <th>Sales</th>
          <th>Total</th>
        </tr>
        <tr>
          <td>Hillary</td>
          <td>Nyakundi</td>
          <td>tables@mail.com</td>
          <td>tables@mail.com</td>
        </tr>
        <tr>
          <td>Lary</td>
          <td>Mak</td>
          <td>developer@mail.com</td>
          <td>developer@mail.com</td>
        </tr>
        <tr>
          <td>Lary</td>
          <td>Mak</td>
          <td>developer@mail.com</td>
          <td>developer@mail.com</td>
        </tr>
      </table>
    </div>
  );
};

export default Recent;
