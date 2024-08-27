import { Box, FormControl, Stack, styled } from "@mui/material";

const StyledFormContainer = styled(FormControl) (()=>({
    marginTop:"15px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
}))

export const FormContainer = ({children}) => {
    return <StyledFormContainer><StyledStack>{children}</StyledStack></StyledFormContainer>
};

export const FormPageContainer = ({children}) => {
    return <StyledContainer>{children}</StyledContainer>
}

const StyledContainer = styled(Box) (({theme})=>({
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"space-between",
    padding:"24px",
    [theme.breakpoints.down("sm")]: {
        padding:"24px 16px",
    },
}))

const StyledStack = styled(Stack) (({theme}) =>({
    width:"500px",
    padding: "12px 12px",
    borderRadius: 16,
    border:"2px solid #FFFFFF",
    backdropFilter:"blur(20px)",
    background:"rgba (255, 255, 255, 0.7)",
    boxShadow:"0px 60px 180px rgba(0, 0, 0, 0.15)",
    [theme.breakpoints.down("sm")]: {
        width: "100%",
    },
}));