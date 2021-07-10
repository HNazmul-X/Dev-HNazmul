import { faCheckCircle, faTimesCircle, faUser } from "@fortawesome/free-regular-svg-icons";
import { faEnvelopeOpen, faPaperPlane, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ThemeButton } from "../../Components/Theme/ThemeStyledComponent";
import envlopeImg from "../../Images/Envelope_perspective_matte.png";

const ContactMeForm = () => {
    const [isEmailSent, setIsEmailSent] = useState("nothing");
    const [isEmailSpinner, setISEmailSpinner] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        const emailData = {
            ...data,
            date: new Date(),
            emailId: `HNazmulEmail${Math.round(Math.random() * 10000000)}`,
        };

        console.log(emailData);
        fetch("https://nodejs-node-mailer.herokuapp.com/sendEmail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(emailData),
        })
            .then((res) => res.json())
            .then((data) => {
                setISEmailSpinner(true);
                setIsEmailSent(data?.accepted.length > 0 ? "success" : "failed");
                console.log(data);

                setTimeout(() => {
                    setISEmailSpinner(false);
                }, 5000);
            });
    };

    return (
        <div className="row align-items-center">
            <div className="col-md-5">
                <img src={envlopeImg} className="img-fluid contact-form-image-MBWjUqZTundupbfx2aXarXuw5Ko5aMd" alt="" />
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
                        {errors.name && <span className="text-warning small">Please Enter Your Name</span>}
                    </div>

                    <div className="mb-2">
                        <div className="input-group">
                            <span class="input-group-text" id="basic-addon1">
                                <FontAwesomeIcon className="fa-2x" icon={faEnvelopeOpen} />
                            </span>
                            <input placeholder="Enter Your Email Adress" name="email" className="form-control" {...register("email", { pattern: { value: /\S+@\S+\.\S+/, message: "error message" }, required: true })} />
                        </div>
                        {errors.email && <span className=" text-warning small">you Should enter Your valid Email Adress</span>}
                    </div>

                    <div className="mb-2">
                        <div className="input-group ">
                            <textarea placeholder="Write Your Massage" name="massage" className="form-control" id="" cols="30" rows="7" {...register("massage", { required: true })}></textarea>
                        </div>
                        {errors.massage && <span className="text-warning small">Please Write your Massage</span>}
                    </div>

                    <div className="text-center">
                        <ThemeButton className="btn w-50" type="submit">
                            Send <FontAwesomeIcon icon={faPaperPlane} />
                        </ThemeButton>
                    </div>
                </form>
            </div>

            {isEmailSpinner && (
                <div className="col-md-10 p-2 mt-4 alert-primary ms-auto mb-5">
                    <div className="row align-items-center">
                        {isEmailSent === "noting" ? (
                            <>
                                <div className="col-2 text-center">
                                    <div class="spinner-border text-light" role="status"></div>
                                </div>
                                <div className="col-10">
                                    <h5>Please Wait Your rquest is Prossecing</h5>
                                </div>{" "}
                            </>
                        ) : isEmailSent === "success" ? (
                            <>
                                <div className="col-2 text-center">
                                    <h1>
                                        <FontAwesomeIcon className="text-success" icon={faCheckCircle} />
                                    </h1>
                                </div>
                                <div className="col-10">
                                    <h5 class="text-success">Successfully Sent you Mail. Thank you for You contct</h5>
                                </div>{" "}
                            </>
                        ) : (
                            <>
                                <div className="col-2 text-center">
                                    <FontAwesomeIcon icon={faTimesCircle} />
                                </div>
                                <div className="col-10">
                                    <h5>SomeThing Went Wrong. Please Try Again Later</h5>
                                </div>{" "}
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactMeForm;
