import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const usersFromStore = useSelector(state => state);
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    const storedUsers = localStorage.getItem('userData');
    if (storedUsers) {
      const parsedUsers = JSON.parse(storedUsers);
      setUsers(parsedUsers);
    }
  }, []);

  function saveUserData() {
    const userData = { name, age };
    const updatedUsers = [...users, userData];
    localStorage.setItem('userData', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    dispatch({
      type: "UPDATE_USER",
      payload: updatedUsers
    });
  };

  return (
    <div className='w-2/5 mt-28 mx-auto container flex flex-col gap-3'>
      <h1 className='mx-auto text-2xl mb-10'>Users</h1>
      <input
        type="text"
        className='border border-sky-700 p-2 outline-sky-800 rounded-md'
        placeholder='Enter your name...'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        className='border border-sky-700 outline-sky-800 p-2 rounded-md'
        placeholder='Enter your age...'
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button
        onClick={saveUserData}
        className='border border-gray-200 p-1 shadow-inner hover:bg-slate-100 rounded-md'
      >
        SAVE
      </button>

      <table className='flex w-100 flex-col mt-14'>
        <thead>
          <tr>
            <th className='w-80'>№</th>
            <th className='w-80'>Name</th>
            <th className='w-80'>Age</th>
          </tr>
        </thead>
        <tbody className='mt-2'>
          {users.map((user, index) => (
            <tr key={index} className='text-center'>
              <td className='w-80'>{index + 1}</td>
              <td className='w-80'>{user.name}</td>
              <td className='w-80'>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
