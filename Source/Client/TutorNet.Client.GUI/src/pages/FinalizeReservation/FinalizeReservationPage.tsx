import { Box, Button, Divider, FormControl, FormLabel, Grid, Input, Paper, Typography, styled } from "@mui/material";
import GenericFormButton from "../../components/FinalizeReservationPage/GenericFormInput";
import { Form, Formik, useFormik, useFormikContext } from "formik";
import {FormValues} from "../../components/FinalizeReservationPage/FormValues";
import SelectFormInput from "../../components/FinalizeReservationPage/SelectFormInput";

const FormMainContainer = styled(Box)({
    backgroundColor: "#edeff2", 
    width: "100vw", 
    height: "calc(100vh - 235px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})

function onSubmit(){
    //TODO: Communication with the server
}

function FinalizeReservationPageContent()
{   
    const formikProps = useFormikContext<FormValues>();
    //GenericFormButton values
    //0 - Reservation Date, 1 - E-mail Address, 2 - Name | Surname, 3 - Material Range, 4 - Address, 5 - Phone Number, 6 - Reservation Comment

    return(
        <FormMainContainer>
            <Paper sx={{width: "50rem", maxHeight: "35rem", minHeight: "35rem"}}>
                <Typography component="div" fontSize={27} fontWeight={540} sx={{pt: "1.2rem", pb: "1.2rem"}}>
                    Finalize yout reservation
                </Typography>

                <Divider/>
                    <Form>
                        <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", minHeight: "22rem"}}>
                            <Grid container sx={{width: "100%", backgroundColor: "none", height: "100%"}}>
                                <GenericFormButton FormikValue={formikProps.values.reservationDate} FormikValueOnChange={formikProps.handleChange} FormikOnBlur={formikProps.handleBlur} 
                                InputNumber={0} Size={6} idName="reservationDate"
                                />
                                <GenericFormButton FormikValue={formikProps.values.email} FormikValueOnChange={formikProps.handleChange} FormikOnBlur={formikProps.handleBlur}
                                InputNumber={1} Size={6} idName="email"
                                />
                                <GenericFormButton FormikValue={formikProps.values.name} FormikValueOnChange={formikProps.handleChange} FormikOnBlur={formikProps.handleBlur}
                                InputNumber={2} Size={6} idName="name"
                                />
                                <SelectFormInput FormikValue={formikProps.values.materialRange} FormikValueOnChange={formikProps.handleChange} formikSetValue={formikProps.setFieldValue}
                                InputNumber={3} Size={6} idName="materialRange"
                                />
                                <GenericFormButton FormikValue={formikProps.values.address} FormikValueOnChange={formikProps.handleChange} FormikOnBlur={formikProps.handleBlur}
                                InputNumber={4} Size={6} idName="address"
                                />
                                <GenericFormButton FormikValue={formikProps.values.phoneNumber} FormikValueOnChange={formikProps.handleChange} FormikOnBlur={formikProps.handleBlur}
                                InputNumber={5} Size={6} idName="phoneNumber"
                                />
                                <GenericFormButton FormikValue={formikProps.values.Comment} FormikValueOnChange={formikProps.handleChange} FormikOnBlur={formikProps.handleBlur}
                                InputNumber={6} Size={12} idName="Comment"
                                />
                            </Grid>
                        </Box>

                        <Grid container sx={{paddingTop: "1.8rem"}}>
                            <Grid item xs={12}>
                                <Typography>
                                    <Button type="submit" sx={{color: "black", backgroundColor: "lightBlue"}}>Confirm and Send</Button>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Form>
            </Paper>
        </FormMainContainer>
    );
}

export default function FinalizeReservationPage()
{
    return(
        <Formik initialValues={{reservationDate: "test", email: "", name: "", materialRange: "", address:"", phoneNumber: "", Comment: ""}}
        onSubmit={(values) => {console.log(values)}}
       >
            <FinalizeReservationPageContent/>
        </Formik>
    );
}