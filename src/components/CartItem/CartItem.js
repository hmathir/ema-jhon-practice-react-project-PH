import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartItem = (props) => {
    const { name, img} = props.item;
    return (
        <div className="flex items-center justify-between w-11/12 mx-auto p-2 bg-white border border-black">
            <div>
                <img className="w-9 h-9" src={img} alt="" />
            </div>
            <p>{name.length > 10 ? name.split(' ')[0] : name}</p>
            <p className="text-red-500"><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></p>
        </div>
    );
};

export default CartItem;