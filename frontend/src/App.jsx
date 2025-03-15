import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import User from './component/getUser/User';
import Add from './component/addUser/add';
import Edit from './component/updateUser/Edit'

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <div><User/></div>
    },
    {
      path: "/add",
      element: <div><Add/></div>
    },
    {
      path: "/edit/:id",
      element: <div><Edit/></div>
    }
  ]);
  
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
