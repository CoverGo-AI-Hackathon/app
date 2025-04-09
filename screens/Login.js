import React from "react";
import { StatusBar } from "react-native";

import { Formik } from "formik";

import { Ionicons } from "@expo/vector-icons"; 

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon, 
    StyledInputLabel,
    StyledTextInput,
    Colors
} from "./../components/style";

import { View } from "react-native";

const { brand, darkLight } = Colors;

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
                <Formik
                    initialValues={{ email: "", password: "" }}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <StyledFormArea>
                            <MyTextInput 
                                label="Email Address"
                                icon="mail"
                                placeholder="vietlecd@gmail.com"
                                placeholderTextColor={darkLight} 
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')} 
                                value={values.email}
                                keyboardType="email-address"
                                handleChange={handleChange} 
                                handleBlur={handleBlur}    
                                values={values}            
                            />
                        </StyledFormArea>
                    )}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
}

const MyTextInput = ({label, icon, handleChange, handleBlur, values, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Ionicons name={icon} size={30} color={brand} />  {}
            </LeftIcon>
            <StyledInputLabel>
                {label}
            </StyledInputLabel>
            <StyledTextInput
                {...props}
                placeholder={label}
                placeholderTextColor={darkLight}
                onChangeText={handleChange(label)} 
                onBlur={handleBlur(label)}         
                value={values[label]}              
            />
        </View>
    )
}

export default Login;
