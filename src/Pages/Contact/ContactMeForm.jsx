import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faEnvelopeOpen, faEnvelopeSquare, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ThemeButton } from '../../Components/Theme/ThemeStyledComponent';
import envlopeImg from "../../Images/Envelope_perspective_matte.png"








const ContactMeForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
      <div className="row align-items-center">
          <div className="col-md-5">
              <img src={envlopeImg} className="img-fluid" alt="" />
          </div>
          <div className="col-md-7">
              <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="input-group mb-2">
                      <span class="input-group-text" id="basic-addon1">
                          <FontAwesomeIcon className="fa-2x" icon={faUser} />
                      </span>
                      <input placeholder="Write Your Full Name" className="form-control" {...register("exampleRequired", { required: true })} />
                      {errors.exampleRequired && <span>This field is required</span>}
                  </div>
                  <div className="input-group mb-2">
                      <span class="input-group-text" id="basic-addon1">
                          <FontAwesomeIcon className="fa-2x" icon={faEnvelopeOpen} />
                      </span>
                      <input placeholder="Enter Your Email Adress" className="form-control" {...register("exampleRequired", { required: true })} />
                      {errors.exampleRequired && <span>This field is required</span>}
                  </div>
                  <div className="input-group mb-2">
                      <textarea placeholder="Write Your Massage" name="" className="form-control" id="" cols="30" rows="7"></textarea>
                      {errors.exampleRequired && <span>This field is required</span>}
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