import { useState } from "react";
const useForm = (initialForm = {}) => {
  const [formState, setformState] = useState(initialForm);

  //   const { username, email, password } = formState;
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setformState({ ...formState, [name]: value });
  };

  return {
    formState,
    onInputChange,
  };
};

export default useForm;
