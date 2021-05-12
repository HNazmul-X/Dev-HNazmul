import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";


const SkillProgressbar = () => {
    return (
        <div>
            <div className="row  mb-4">
                <div className="col-6">
                    <h6 className="fw-normal small  ">HTML</h6>
                </div>
                <div className="col-6 text-end">
                    <h6 className="fw-normal small  ">80%</h6>
                </div>
                <ProgressBar labelColor="black" labelSize="12px" bgColor="gold" height={10} completed={80} />
            </div>
            <div className="row  mb-4">
                <div className="col-6">
                    <h6 className="fw-normal small  ">Css</h6>
                </div>
                <div className="col-6 text-end">
                    <h6 className="fw-normal small  ">85%</h6>
                </div>
                <ProgressBar labelColor="black" labelSize="12px" bgColor="gold" height={10} completed={85} />
            </div>
            <div className="row  mb-4">
                <div className="col-6">
                    <h6 className="fw-normal small  ">Bootstrap</h6>
                </div>
                <div className="col-6 text-end">
                    <h6 className="fw-normal small  ">95%</h6>
                </div>
                <ProgressBar labelColor="black" labelSize="12px" bgColor="gold" height={10} completed={95} />
            </div>
            <div className="row  mb-4">
                <div className="col-6">
                    <h6 className="fw-normal small  ">Javascript</h6>
                </div>
                <div className="col-6 text-end">
                    <h6 className="fw-normal small  ">60%</h6>
                </div>
                <ProgressBar labelColor="black" labelSize="12px" bgColor="gold" height={10} completed={60} />
            </div>
            <div className="row  mb-4">
                <div className="col-6">
                    <h6 className="fw-normal small  ">React</h6>
                </div>
                <div className="col-6 text-end">
                    <h6 className="fw-normal small  ">50%</h6>
                </div>
                <ProgressBar labelColor="black" labelSize="12px" bgColor="gold" height={10} completed={50} />
            </div>
            <div className="row  mb-4">
                <div className="col-6">
                    <h6 className="fw-normal small  ">Firebase</h6>
                </div>
                <div className="col-6 text-end">
                    <h6 className="fw-normal small  ">40%</h6>
                </div>
                <ProgressBar labelColor="black" labelSize="12px" bgColor="gold" height={10} completed={40} />
            </div>
            <div className="row  mb-4">
                <div className="col-6">
                    <h6 className="fw-normal small  ">Node js</h6>
                </div>
                <div className="col-6 text-end">
                    <h6 className="fw-normal small  ">50%</h6>
                </div>
                <ProgressBar labelColor="black" labelSize="12px" bgColor="gold" height={10} completed={50} />
            </div>
            <div className="row  mb-4">
                <div className="col-6">
                    <h6 className="fw-normal small  ">Mongodb</h6>
                </div>
                <div className="col-6 text-end">
                    <h6 className="fw-normal small  ">60%</h6>
                </div>
                <ProgressBar labelColor="black" labelSize="12px" bgColor="gold" height={10} completed={60} />
            </div>
            <div className="row  mb-4">
                <div className="col-6">
                    <h6 className="fw-normal small  ">Meterail Ui</h6>
                </div>
                <div className="col-6 text-end">
                    <h6 className="fw-normal small  ">77%</h6>
                </div>
                <ProgressBar labelColor="black" labelSize="12px" bgColor="gold" height={10} completed={77} />
            </div>
        </div>
    );
};

export default SkillProgressbar;
