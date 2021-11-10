import React from "react";
import Header from "../header";
import * as S from "./styled"

const Layout = ({children}) => (
    <S.WrapperLayout>
        <Header />
        {children}
    </S.WrapperLayout>
)
export default Layout;