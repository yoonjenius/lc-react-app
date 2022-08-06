import { useState } from 'react';

function useToggle(initialState = true) {
  const [Visible, setVisible] = useState(initialState);

  const toggle = () => {
    setVisible((prevVisible) => !prevVisible);
  };
  return [Visible, toggle];
}
export default useToggle;
