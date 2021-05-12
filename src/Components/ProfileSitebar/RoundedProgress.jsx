import React from 'react';
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const RoundedProgress = () => {
    return (
        <div>
            <div className="rounded-progress">
                <div className="row">
                    <div className="col-4">
                        <CircularProgressbar
                            value={60}
                            text={`${60}%`}
                            styles={buildStyles({
                                pathColor: "#ffbf0f",
                                textColor: "gold",
                            })}
                        />
                    </div>
                    <div className="col-4">
                        <CircularProgressbar
                            value={60}
                            text={`${60}%`}
                            styles={buildStyles({
                                pathColor: "#ffbf0f",
                                textColor: "gold",
                            })}
                        />
                    </div>
                    <div className="col-4">
                        <CircularProgressbar
                            value={60}
                            text={`${60}%`}
                            styles={buildStyles({
                                pathColor: "#ffbf0f",
                                textColor: "gold",
                            })}
                        />
                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default RoundedProgress;