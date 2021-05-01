import React from 'react';
import styled from 'styled-components';
import { TitleDesc } from '../../Components/Theme/ThemeStyledComponent';
import ServiceBox from './ServiceBox';


const MyServicesDiv = styled.div`

margin-bottom:50px;


`

const MyServices = () => {
    return (
        <MyServicesDiv>
            <div className="title text-center p-4">
                <TitleDesc>Services That I Provide</TitleDesc>
            </div>

            <div className="container-fluid">
                <div className="row justify-content-center">
                    <ServiceBox/>
                    <ServiceBox/>
                    <ServiceBox/>
                </div>
            </div>
            
        </MyServicesDiv>
    );
};

export default MyServices;