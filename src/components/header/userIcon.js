import { Avatar, Box, IconButton, Menu, MenuItem, Stack } from "@mui/material";
import React, { useState } from "react";
import { UseUser } from "../../hooks";
import { Button, Link } from "../atoms";

export const UserIcon = () => {
  const { anchor, setAnchor } = useState(null);
  const {userData} = UseUser();
  const dispatch = userDispatch();
  return (
    <Box>
      <IconButton onClick={(e) => setAnchor(e.currentTarget)}>
        <Avatar></Avatar>
      </IconButton>
      <Menu anchorEl={anchor} keepMounted open={Boolean(anchor)} onClose={()=>{setAnchor(null)}}>
        <Stack>
            {!userData && (
                <>
                <MenuItem>
                    <Link to={"/signin"}>sign in</Link>
                </MenuItem>
                <MenuItem>
                    <Link to={"/signup"}>sign up</Link>
                </MenuItem>
                <Button>log out</Button>
                </>
            )}
        </Stack>
      </Menu>
    </Box>
  );
};
