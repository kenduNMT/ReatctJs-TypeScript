// import { useState } from 'react'
// import './App.css'
// import Parent from './components/Parent'

// function App() {
//   const [isHide, setIsHide] = useState(false);
//   return (
//     <>
//       <div>
//         {!isHide && <Parent />}
//         <button onClick={() => setIsHide(!isHide)}>Toggle Parent</button>
//       </div>
//     </>
//   )
// }

// export default App

//bai 3
// import React from 'react';
// import ChangeColor from './components/Changecolor';

// const App: React.FC = () => {
//   return (
//     <div>
//       <h1>Welcome to the Color Changer App</h1>
//       <ChangeColor initialColor="black" />
//     </div>
//   );
// };

// export default App;

//bai 4
// import React from 'react';
// import Toggle from './components/Toggle';

// const App: React.FC = () => {
//   return (
//     <div>
//       <h1>Welcome to the Toggle Visibility App</h1>
//       <Toggle initialVisibility={false} />
//     </div>
//   );
// };

// export default App;

//bai 8
// import React from 'react';
// import Select from './components/Select';

// const App: React.FC = () => {
//   const cities = ['Hà Nội', 'Hà Nam', 'Ninh Bình', 'Thanh Hóa', 'Nghệ An'];

//   return (
//     <div>
//       <h1>Chọn Thành Phố</h1>
//       <Select cities={cities} />
//     </div>
//   );
// };

// export default App;

//bai 10
// import React from 'react';
// import Checkbox from './components/CheckBox';

// const App: React.FC = () => {
//   const hobbies = ['Đi chơi', 'Code', 'Bơi lội', 'Nhảy dây'];

//   return (
//     <div>
//       <h1>Chọn Sở Thích</h1>
//       <Checkbox options={hobbies} />
//     </div>
//   );
// };

// export default App;
