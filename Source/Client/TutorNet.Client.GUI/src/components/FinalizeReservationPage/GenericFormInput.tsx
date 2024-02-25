import { FormControl, FormLabel, Grid, styled } from "@mui/material";
import Input from '@mui/joy/Input';
import { FormikContextType } from "formik";
import React, { useState, useEffect} from "react";
import { FormValues, FormikOnBlurHandler, FormikOnChangeHandler } from "./FormValues";

const GridItem = styled(Grid)({
    paddingTop: "1.3rem",
    paddingBottom: "1.3rem"
})

//Testing

const LabelsArray: string[] = [
    "Reservation Date", 
    "E-mail Address", 
    "Name | Surname", 
    "Material Range", 
    "Address", 
    "Phone Number", 
    "Reservation Comment"
];

const placeholdersArray: string[] = [
    "12 February 12-13", 
    "example@example.com", 
    "Jan Kowalski", 
    "Primary School - 6 grade", 
    "Test, Testowa 15A", 
    "+48 123 456 789", 
    "Reservation Comment"
];

//Testing

export default function GenericFormButton({ InputNumber, Size, idName, FormikValue, FormikValueOnChange, FormikOnBlur, displayValue }: 
    {InputNumber : number, Size: number, idName: string, FormikValue: string, FormikValueOnChange: FormikOnChangeHandler, FormikOnBlur: FormikOnBlurHandler, displayValue: string | null}): 
    JSX.Element {

    return(
        <GridItem item xs={Size}>
            <FormControl>
                <FormLabel sx={{marginRight: "auto", fontSize: "0.8rem", marginBottom: "-0.0rem"}}>{LabelsArray[InputNumber]}</FormLabel>
                <Input className="outlined-input" id={idName} placeholder={placeholdersArray[InputNumber]}
                 disabled={InputNumber == 0 ? true : false}
                 type={idName == "phoneNumber" ? "number" : ""}
                 value={displayValue === null ? FormikValue : displayValue} onChange={FormikValueOnChange} onBlur={FormikOnBlur}
                 sx={{minWidth: InputNumber == 6 ? "40rem" : "21rem"}}
                 />
            </FormControl>
        </GridItem>
    );
}