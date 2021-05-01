import { faChevronRight, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { ThemeSpan } from '../../Components/Theme/ThemeStyledComponent';

const ServicesBoxDiv = styled.div`
 background:#19181d;
padding:20px;
border-radius:10px;

cursor: pointer;
.order-btn-wrapper{
    .order-btn{
        .icon{
            transition:0.3s;
        }
       
        &:hover{
            .icon{
                transform:translateX(20px)
            }
        }
    }
}


`

const ServiceBox = () => {
    return (
        <div className="col-md-4 p-3">
            <ServicesBoxDiv>
                <h5>Web Development</h5>
                <p className="fw-normal small text-muted">Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, autem assumenda? Numquam dolore in eveniet est cupiditate nam magnam iure? ipsum dolor sit amet consectetur adipisicing elit. Eos, eaque?</p>
                <div className="order-btn-wrapper">
                    <ThemeSpan className="order-btn">
                        Order Now <FontAwesomeIcon className="icon" icon={faChevronRight} />{" "}
                    </ThemeSpan>
                </div>
            </ServicesBoxDiv>
        </div>
    );
};

export default ServiceBox;