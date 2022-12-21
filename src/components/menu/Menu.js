const Menu = () => {
  return (
    <nav>
      <div className="flex items-center">
        <img className="w-10" src="/icons/logo.svg" alt="logo" />
        <h2>Perfect Dashboard</h2>
      </div>
      <ul>
        <li className="flex">
          <img className="w-5" src="/icons/dashboard.svg" alt="dashboard" />
          <a href="#">Dashboard</a>
        </li>
        <li className="flex">
          <img className="w-5" src="/icons/product.svg" alt="product" />
          <a href="#">Products</a>
        </li>
        <li className="flex">
          <img className="w-5" src="/icons/list.svg" alt="list"/>
          <a href="#">Order list</a>
        </li>
        <li className="flex">
          <img className="w-5" src="/icons/analysis.svg" alt="analysis" />
          <a href="#">Analytics</a>
        </li>
        <li className="flex">
          <img className="w-5" src="/icons/stock.svg" alt="stock" />
          <a href="#">Stock</a>
        </li>
        <li className="flex">
          <img className="w-5" src="/icons/order.svg" alt="order" />
          <a href="#">Total order</a>
        </li>
        <li className="flex">
          <img className="w-5" src="/icons/team.svg" alt="team" />
          <a href="#">Team</a>
        </li>
        <li className="flex">
          <img className="w-5" src="/icons/message.svg" alt="message" />
          <a href="#">Messages</a>
        </li>
        <li className="flex">
          <img className="w-5" src="/icons/favorites.svg" alt="favorites" />
          <a href="#">Favorites</a>
        </li>
        <li className="flex">
          <img className="w-5" src="/icons/setting.svg" alt="setting" />
          <a href="#">Setting</a>
        </li>
      </ul>
      <div className="flex">
        <img className="w-5" src="/icons/logout.svg" alt="logout" />
        <span>Log Out</span>
      </div>
    </nav>
  );
};

export default Menu;
