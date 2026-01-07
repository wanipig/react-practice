import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea` // textarea 태그 사용해 여러 줄 입력 받음
    width: calc(100% - 32px);
    ${(props) =>
        props.height&&
        `
        height:${props.height}px;
        `
    }
    padding: 16px;
    font-size: 16px;
    line-height: 20px;
`;

function TextInput(props){
    const{height, value, onChange} = props;

    return <StyledTextarea height = {height} value = {value} onChange = {onChange} />;
}

export default TextInput;