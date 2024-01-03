import { expect, it, vi } from "vitest";
import Form from ".";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

it('Formu gönderdiğimizde addUser doğru parametrelerle çalışıyor mu?', async() => {

    const mock= vi.fn();
    render(<Form addUser={mock}/>)
    user.setup();
    const nameInp= screen.getByLabelText('İsim');

    const mailInp = screen.getByLabelText('Email');

    const ageInp = screen.getByPlaceholderText(/yaş bilgisi giriniz.../i)

    const sendBtn = screen.getByRole('button')

    

    await user.click(nameInp);
    await user.keyboard('fırat')

    await user.type(mailInp, 'firat123@gmail.com')
    await user.type(ageInp, '34')

    await user.click(sendBtn)

    expect(mock).toBeCalledWith({
        name:'fırat',
        email: 'firat123@gmail.com',
        age: '34'
    })


})

it("form göndeirldikten sonra inputlar temzileniyor mu?" ,()=> {
    render(<Form addUser={() => {}}/>)

    /* gerekli elemanları alma */
    const nameInp= screen.getByLabelText('İsim');

    const mailInp = screen.getByLabelText('Email');

    const ageInp = screen.getByPlaceholderText(/yaş bilgisi giriniz.../i)

    const sendBtn = screen.getByRole('button')

    /* inputları doldurma  */
    user.type(nameInp, 'Firat')
    user.type(mailInp, 'firat123@gmail.com')
    user.type(ageInp, '34')

    /* formu gönderme */
    user.click(sendBtn)

    /* inputlar boş mu? */
    expect(nameInp.value).toBe('');
    expect(mailInp.value).toBe('');
    expect(ageInp.value).toBe('');

    

})