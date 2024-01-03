import { render, screen, within } from "@testing-library/react";
import { expect, it } from "vitest";
import List from ".";
import { testUsers } from "../../constants/testdata";



it('Gönderilen her kullanıcı için ekrana satır basılır.', () => {

    render(<List users={testUsers}/>)

    const body = screen.getByTestId('body');

    const rows= within(body).getAllByRole('row');

    expect(rows).toHaveLength(testUsers.length);
})

it('Her bir kullanıcı için isim, email ve yaş hücreleri bulunur', () => {
    render(<List  users={testUsers}/>)

    for(const user of testUsers) {
        screen.getByRole('cell', {name: user.name})
        screen.getByRole('cell', {name: user.email})
        screen.getByRole('cell', {name: user.age})
    }


})