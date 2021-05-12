import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faEnvelopeOpen, faEnvelopeSquare, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useForm } from "react-hook-form";
import { ThemeButton } from "../../Components/Theme/ThemeStyledComponent";
import envlopeImg from "../../Images/Envelope_perspective_matte.png";

const ContactMeForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        
        const emailData = {
            ...data,
            data: new Date(),
            emailId: `HNazmulEmail${Math.round(Math.random() * 10000000)}`,
        };
        fetch("http://localhost:8080/sendEmail", {
            method:"POST",
            body:JSON.stringify(emailData),
            headers:{
                "content-type":"application/json"
            }
        }).then(res => res.json())
        .then(data=> console.log(data));
    };


    return (
        <div className="row align-items-center">
            <div className="col-md-5">
                <img src={envlopeImg} className="img-fluid" alt="" />
            </div>
            <div className="col-md-7">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-2">
                        <div className="input-group ">
                            <span class="input-group-text" id="basic-addon1">
                                <FontAwesomeIcon className="fa-2x" icon={faUser} />
                            </span>
                            <input placeholder="Write Your Full Name" name="name" className="form-control" {...register("name", { required: true })} />
                        </div>
                        {errors.name && <span>This field is required</span>}
                    </div>

                    <div className="mb-2">
                        <div className="input-group">
                            <span class="input-group-text" id="basic-addon1">
                                <FontAwesomeIcon className="fa-2x" icon={faEnvelopeOpen} />
                            </span>
                            <input placeholder="Enter Your Email Adress" name="email" className="form-control" {...register("email", { pattern: { value: /\S+@\S+\.\S+/, message: "error message" } }, { required: true })} />
                        </div>
                        {errors.email && <span>This field is required</span>}
                    </div>

                    <div className="mb-2">
                        <div className="input-group ">
                            <textarea placeholder="Write Your Massage" name="massage" className="form-control" id="" cols="30" rows="7" {...register("massage", { required: true })}></textarea>
                        </div>
                        {errors.massage && <span>This field is required</span>}
                    </div>

                    <div className="text-center">
                        <ThemeButton className="btn w-50" type="submit">
                            Send <FontAwesomeIcon icon={faPaperPlane} />
                        </ThemeButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactMeForm;
