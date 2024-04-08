/* eslint-disable react/prop-types */
function InputList(props) {
    const HandleDelete=()=>{
    props.onDelete(props.userName);
    }

  return (
    <div className="bg-white p-4 rounded shadow-md mt-3">
      <li className="text-black text-xl" onClick={HandleDelete}>{`Name: ${props.userName}, Age: ${props.age}`}</li>
    </div>
  );
}

export default InputList;
