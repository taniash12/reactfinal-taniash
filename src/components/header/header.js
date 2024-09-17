import React from 'react'
import { LanguageSelect } from './languageSelect'
import { AppBar, Box, styled, Toolbar } from '@mui/material'
import { Link } from '../atoms'
import { RiHome2Fill } from "react-icons/ri";
import { UserIcon } from './userIcon';
import { SearchBar } from './searchBar';


const StyleAppBar = styled(AppBar) (()=>({
  backgroundColor:"#131921",
  padding:"0 37px 0 30px",
}))

const StyleToolBar = styled(Toolbar) (()=>({
  display:"flex",
  width:"100%",
  justifyContent:"space-between",
  paddingTop:8,
  peddingBottom:8,
}))

export const Header = () => {
  return (
    <Box>
      <StyleAppBar>
        <StyleToolBar>
          <Link to="/">
            <RiHome2Fill />
          </Link>
          <SearchBar/>
          <UserIcon/>
          <LanguageSelect/>
        </StyleToolBar>
      </StyleAppBar>
    </Box>
  )
}
