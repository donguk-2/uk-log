import React, { useCallback, useState } from "react";

type ReturnType = [boolean, (id: string, pw: string) => void];

const useLoginCheck = (): ReturnType => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const handler = useCallback((id: string, pw: string) => {
    setIsLogin(
      id === process.env.REACT_APP_ID && pw === process.env.REACT_APP_PASSWORD
    );
  }, []);
  return [isLogin, handler];
};

export default useLoginCheck;
