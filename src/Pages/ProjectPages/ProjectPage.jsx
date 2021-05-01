import React from 'react';
import styled from 'styled-components';
import ProjectLargeCard from './ProjectLargeCard';



const ProjectPageDiv = styled.div`




`
const ProjectPage = () => {
    return (
        <ProjectPageDiv>


            <div className="container-fluid">
                <div className="row">
                    {[...new Array(10)].map(item=> {
                        return (
                            <div className="col-md-6 py-2">
                                <ProjectLargeCard />
                            </div>
                        );
                    })}
                </div>
            </div>
            
        </ProjectPageDiv>
    );
};

export default ProjectPage;