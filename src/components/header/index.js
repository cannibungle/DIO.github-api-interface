import React, { useState } from "react";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";

const Header = () => {
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState();

  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  };

  const enterKeyToSubmit = (pressEnter) => {
    if (pressEnter.key === "Enter") {
      return submitGetUser();
    }
  };

  return (
    <header>
      <S.Wrapper>
        <h1>GitHub User Search</h1>
        <input
          type="text"
          placeholder="Digite o username para pesquisa..."
          onChange={(event) => setUsernameForSearch(event.target.value)}
          onKeyDown={enterKeyToSubmit}
        />
        <button type="submit" onClick={submitGetUser}>
          <span>Buscar</span>
        </button>
      </S.Wrapper>
    </header>
  );
};

export default Header;
