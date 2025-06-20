import "./CheckBox.css"
import { FaSquare, FaCheckSquare } from "react-icons/fa";

export default function CheckBox({checked = false, onClick}){
    return(
<div onClick={onClick}>

    {!checked && (
        <div className="checkBox unChecked">
            <FaSquare size={24} className="cora" />
        </div>
    )}
    {checked && (
        <div className="checkBox unChecked">
            <FaCheckSquare size={24} className="corv" />
        </div>
    )}
</div>
    )
}