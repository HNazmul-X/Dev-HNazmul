import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import dummyBlogImg from "../../Images/glossy-massag-home.jpg"
import { ThemeButton } from '../Theme/ThemeStyledComponent';

const BlogCardDiv = styled.div`
    background:rgb(59, 67, 75);
    padding:10px;
    border-radius:20px; 
    overflow:hidden;
    border:2px solid rgb(59, 67, 75);
    transition:0.3s;
    &:hover{
        border:2px solid rgba(255, 217, 0, 0.493);
        transform:translateY(-20px);
        box-shadow:20px 30px 40px -10px #1d2533;
    }
    .blog-img-thumb {
        img {
            width: 100%;
            height: 150px;
            object-fit: cover;
            border-radius:20px;
        }
    }
`;

const BlogCard = () => {
    return (
        <BlogCardDiv>
            <div className="blog-img-thumb mb-2">
                <img src={dummyBlogImg} className="img-fluid" alt="" />
            </div>

            <div className="blog-desc">
                <h5 className="fw-normal mb-2">Lorem ipsum dolor sit amet, consectetur</h5>
                <p className="small fw-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias illum animi, quibusdam dolorem laboriosam facere!</p>
                <div className="text-center">
                    <ThemeButton className="btn">
                        Read More <FontAwesomeIcon icon={faChevronRight} />
                    </ThemeButton>
                </div>
            </div>
        </BlogCardDiv>
    );
};

export default BlogCard;