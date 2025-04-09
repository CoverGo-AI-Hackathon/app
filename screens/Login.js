import React from "react";
import { StatusBar } from "react-native";

import { Formik } from "formik";

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea
} from "./../components/style";

const Login = () => {
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo
                    resizeMode="cover"
                    source={require("./../assets/img/Logo.jpg")}
                    style={{ width: 100, height: 100 }} 
                />
                <PageTitle>Welcome to Our App</PageTitle>
                <SubTitle>Account Login</SubTitle>

                <Formik>
                    initialValues={{ email: "", password: "" }}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <StyledFormArea>
                            {/* Add your form fields here */}
                        </StyledFormArea>
                    )}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
}

export default Login;