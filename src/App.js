import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import TasksList from './components/TasksList';
function App() {
  const title = 'Tasks Tracker 3';
  const navbarList = ['Home', 'About'];
  const tasks = ['A task', 'A second task', 'A third task', 'Forth task'];

  const addNewTask = () => {
    tasks.push('Fived task');
    console.log(tasks);
    console.log('Button clicked !');
  };

  const onChange = () => {
    console.log('Someone typed');
  };

  return (
    <div className='main'>
      <Navbar mainTitle={title} navbarList={navbarList} />
      <div className='container p-5 rounded'>
        <h1 className='p-3 text-center'>{title}</h1>
        <TasksList tasks={tasks} />
        <div className='input-group my-3'>
          <input onChange={onChange} type='text' className='form-control' placeholder='Enter your task' />
          <button onClick={addNewTask} className='btn btn-secondary' type='button'>
            Add task
          </button>
        </div>
      </div>
    </div>
  );
}

// function App() {
//   // const user = {
//   //   username: 'Saleh',
//   //   password: '135sda',
//   //   role: 'admin',
//   // };
//   // const { username, password, role } = user;

//   const colors = ['green', 'white', 'black'];
//   const [firstColor, secondColor, thirdColor] = colors;

//   return (
//     <div className='App'>
//       {/* <h1>{username}</h1>
//       <h1>{password}</h1>
//       <h1>{role}</h1> */}

//       <h1>{firstColor}</h1>
//     </div>
//   );
// }

export default App;
