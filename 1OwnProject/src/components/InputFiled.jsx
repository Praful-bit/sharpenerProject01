
import { useState } from "react";
import InputList from "./InputList";
import ErrorMessageCard from "./ErrorMessageCard";

function InputField() {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [userList, setUserList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName.trim() === "" || age.trim() === "") {
      setErrorMessage("Please provide both User Name and Age !");
      setIsModalOpen(true);
      return;
    } else if (parseInt(age) <= 0) {
      setErrorMessage("Age should be greater than 0 !");
      setIsModalOpen(true);
      return;
    }
    setUserList([...userList, { userName, age }]);
    setUserName("");
    setAge("");
  };

  const handleDismissError = () => {
    setErrorMessage("");
    setIsModalOpen(false);
  };

   const HandleDelete = (userNameToDelete) => {
     const updatedUserList = userList.filter(
       (user) => user.userName !== userNameToDelete
     );
     setUserList(updatedUserList);
   };
  return (
    <div className="flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
        <label className="text-black mb-2 p-2">UserName</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="border border-gray-400 px-4 py-2 mb-4 focus:outline-none focus:border-blue-500 rounded"
        />
        <br />
        <label className="text-black mb-2 p-2">Age(Years)</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="border border-gray-400 px-4 py-2 mb-4 focus:outline-none focus:border-blue-500 rounded"
        />
        <br></br>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
        >
          Add User
        </button>
      </form>

      {isModalOpen && (
        <ErrorMessageCard
          title="Error"
          message={errorMessage}
          onDismiss={handleDismissError}
        />
      )}

      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">User List</h2>
        <ul>
          {userList.map((user, index) => (
            <InputList key={index} userName={user.userName} age={user.age} onDelete={HandleDelete}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default InputField;
