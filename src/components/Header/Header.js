import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <div className="bg-[#1C2B35] py-[10px]">
      <div className="w-9/12 mx-auto flex items-center justify-between">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <ul className="flex items-center justify-between gap-8 text-white">
            <li>Order</li>
            <li>Order Review</li>
            <li>Manage Inventory</li>
            <li>Login</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
