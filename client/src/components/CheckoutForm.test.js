import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)

    const inputFirstName =  screen.getByLabelText(/first name:/i)
    const inputLastName =  screen.getByLabelText(/last name:/i)
    const inputAddress =  screen.getByLabelText(/address:/i)
    const inputCity =  screen.getByLabelText(/city:/i)
    const inputState =  screen.getByLabelText(/state:/i)
    const inputZip =  screen.getByLabelText(/zip:/i)

    fireEvent.change(inputFirstName,{target:{ value:"Niki", name:"firstName"}})
    fireEvent.change(inputLastName,{target:{ value:"Dossett", name:"lastName"}})
    fireEvent.change(inputAddress,{target:{ value:"1348 Woodmere Ln", name:"address"}})
    fireEvent.change(inputCity,{target:{ value:"Fort Myers", name:"city"}})
    fireEvent.change(inputState,{target:{ value:"Fl", name:"state"}})
    fireEvent.change(inputZip,{target:{ value:"33919", name:"zip"}})

    expect(inputFirstName).toHaveValue('Niki')
    expect(inputLastName).toHaveValue('Dossett')
    expect(inputAddress).toHaveValue('1348 Woodmere Ln')
    expect(inputCity).toHaveValue('Fort Myers')
    expect(inputState).toHaveValue('Fl')
    expect(inputZip).toHaveValue('33919')

    const submit = screen.getByRole('button')

    fireEvent.click(submit)

    const successMessage = screen.getByTestId('successMesssage')
    expect(successMessage).toBeInTheDocument()

    within(successMessage).getByText(/niki dossett/i)
    within(successMessage).getByText(/1348 Woodmere Ln/i)
    within(successMessage).getByText(/Fort Myers, fl 33919/i)

});
