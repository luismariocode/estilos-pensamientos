import React from "react";

export const Situacion = (props) => {
    return (
        <div className="w-full text-2xl text-blue">
            <div className="inline font-bold">
                <span>{props.numero}.&nbsp;</span>
                {props.text}
            </div>
        </div>
    );
};

export const Opcion = (props) => {
    return (
        <div className="flex border border-gray  min-w-[300px] justify-center shadow-md rounded p-7 items-start my-2 w-full md:8/12 ">
            <div className="flex flex-col justify-center ">
                <label className="w-10/12 rounded text-justify text-dark font-medium ml-2">
                    {props.text}
                </label>
                <div className="text-primary border-2 rounded-lg mt-5 text-center italic">
                    <span>{props.label}</span>
                </div>
            </div>
            <div className="h-full mt-1 ">
                <input
                    name={props.name}
                    value={props.value}
                    type="number"
                    className="w-10  h-10 cursor-pointer md:ml-10 text-2xl font-bold text-sucess border-2 border-sucess bg-gray-light text-center rounded focus:appearance-none"
                />
            </div>
        </div>
    );
};
