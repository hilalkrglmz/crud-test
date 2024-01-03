import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import App from "./App";
import user from "@testing-library/user-event";

it('Uygulama doğru bir şekilde çalışıyor mu?', async () => {
    render(<App/>)

    //*gerekli elemanları çağır
    const nameInp= screen.getByLabelText('İsim')
    const mailInp= screen.getByLabelText('Email')
    const ageInp= screen.getByPlaceholderText('Yaş bilgisi giriniz...')
    const sendBtn = screen.getByRole("button",{name: 'Kullanıcı Ekle'})

    user.setup()
    //*inputları doldur
    await user.type(nameInp, 'Veli')
    await user.type(mailInp, 'veli124@gmail.com')
    await user.type(ageInp, '20')

    //*kullanıcı ekle butonuna tıkla
    await user.click(sendBtn)
    
    //*Inputlara girdiğimiz veriye uygun bir şekilde tablo hücreleri ekrana basılır
    screen.getByRole("cell", {name: 'Veli'})
    screen.getByRole("cell", {name: 'veli124@gmail.com'})
    screen.getByRole("cell", {name: '20'})

})

const multiple = (a,b,c) => {
    return a * b * c;
}

it("Fonksiyon doğru sonuç veriyor mu?",() => {
    const sum= multiple(10,2,3)
    expect(sum).toBe(60)
})