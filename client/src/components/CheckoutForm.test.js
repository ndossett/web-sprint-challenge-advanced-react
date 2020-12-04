import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />)

    const FirstNameInput =  screen.getByLabelText(/first Name:/i)
    const LastNameInput =  screen.getByLabelText(/last Name:/i)
    const AddressInput =  screen.getByLabelText(/address:/i)
    const CityInput =  screen.getByLabelText(/city:/i)
    const StateInput =  screen.getByLabelText(/state:/i)
    const ZipInput =  screen.getByLabelText(/zip:/i)

    userEvent.type(FirstNameInput, "Niki")
    userEvent.type(LastNameInput, "Dossett")
    userEvent.type(AddressInput, "1348 Woodmere Ln")
    userEvent.type(CityInput, "Fort Myers")
    userEvent.type(StateInput, "Fl")
    userEvent.type(ZipInput, "33919")

    expect(FirstNameInput).toHaveValue('Niki')
    expect(LastNameInput).toHaveValue('Dossett')
    expect(AddressInput).toHaveValue('1348 Woodmere Ln')
    expect(CityInput).toHaveValue('Fort Myers')
    expect(StateInput).toHaveValue('Fl')
    expect(ZipInput).toHaveValue('33919')

    const button = screen.getByRole('button')

    userEvent.click(button)

    const successMessage = await screen.findByText('You have ordered some plants! Woo-hoo!')
    const successMessageName = await screen.findByText('Niki Dossett')
    const successMessageAddress = await screen.findByText('1348 Woodmere Ln')
    const successMessageAddress2 = await screen.findByText('Fort Myers, Fl 33919')
    expect(successMessage)
    expect(successMessageName)
    expect(successMessageAddress)
    expect(successMessageAddress2)

});
