import { FormikContextType, FormikErrors } from "formik";
import * as yup from "yup";

export interface FormValues {
    reservationDate: string;
    email: string;
    name: string;
    materialRange: string;
    address: string;
    phoneNumber: string; 
    Comment: string;
}

export type CalendarEntryCreateDto = {
    CalendarEntryType: number,
    IsAccepted: Boolean,
    ReservationDate: Date,
    Name: string,
    Email: string,
    Address: string,
    MaterialRange: string, 
    PhoneNumber: string,
    ReservationComment: string,
    TutorId: number
}

export const RangeValues: string[] = [
    "Primary School, Grade 1-3",
    "Primary School, Grade 4-6",
    "Primary School, Grade 7-9",
    "Secondary School, Basic",
    "Secondary School, Advanced",
    "Matura Exam Revision",
    "Other"
]

export const LabelsArray: string[] = [
    "Reservation Date", 
    "E-mail Address", 
    "Name | Surname", 
    "Material Range", 
    "Address", 
    "Phone Number", 
    "Reservation Comment"
];

export const placeholdersArray: string[] = [
    "12 February 12-13", 
    "example@example.com", 
    "Jan Kowalski", 
    "Primary School - 6 grade", 
    "Test, Testowa 15A", 
    "123 456 789", 
    "Reservation Comment (Optional)"
];

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

export type FormikSetValue = (field: string, value: any, shouldValidate?: boolean | undefined) => Promise<void | FormikErrors<FormValues>>;

export type FormikValidate = FormikContextType<FormValues>;

export const BasicSchema = yup.object().shape({
    name: yup.string().min(3).max(50).required("Required"),
    email: yup.string().email("Please provide vaild email address.").required("Required"),
    address: yup.string().min(3).max(100).required("Required"),
    materialRange: yup.string().min(1).oneOf(RangeValues).required("Required"),
    phoneNumber: yup.string().min(5).max(15).matches(/^[0-9]*$/, "Phone number can only contain numbers.").required("Required"),
    Comment: yup.string().min(0).max(200).default(() => "")
});