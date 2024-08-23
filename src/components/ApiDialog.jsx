import React from "react";
import ApiInput from "./ApiInput";

export default function ApiDialog(){
    return(
        <div>
            <h2>Enter your Gemini API key here</h2>
            <ApiInput/>
        </div>
    );
}