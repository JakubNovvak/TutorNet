import { FormikErrors } from "formik";

export interface FormValues {
    reservationDate: string;
    email: string;
    name: string;
    materialRange: string;
    address: string;
    phoneNumber: string; 
    Comment: string;
}

export const RangeValues: string[] = [
    "Primary School, Grade 1-3",
    "Primary School, Grade 4-6",
    "Primary School, Grade 7-9",
    "Secondary School, Basic",
    "Secondary School, Advanced",
    "Matura Exam Revision"
]

export type FormikOnChangeHandler = {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
};

export type FormikOnBlurHandler = {
    (e: React.FocusEvent<any, Element>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
};

export type FormikSelectOnChangeHandler = ((event: React.MouseEvent<Element, MouseEvent> 
    | React.KeyboardEvent<Element> 
    | React.FocusEvent<Element, Element> 
    | null, value: string 
    | null) => void) | undefined;

export type FormikSetValue = (field: string, value: any, shouldValidate?: boolean | undefined) => Promise<void | FormikErrors<FormValues>>