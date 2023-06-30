import {TestProvider} from "@/shared/lib/tests/componentRender/componentRender";
import {EditableProfileCard, profileReducer} from "@/features/EditableProfileCard";
import {StateSchema} from "@/app/providers/StoreProvider";
import {Currency} from "@/entities/Currency";
import {Country} from "@/entities/Country";
import {ReducersMapObject} from "@reduxjs/toolkit";
import {Theme} from "@/shared/const/theme";
import {Page} from "@/widgets/Page";

const profile = {
    "id": "1",
    "age": "46",
    "currency": Currency.EUR,
    "country": Country.Kazakhstan,
    "city": "Moscow",
    "username": "admin213",
    "avatar": "https://myprepod.ru/img/20171105221233259.jpg",
    "firstName": "Max",
    "lastName": "Portador"
}

const initialState: DeepPartial<StateSchema> = {
    profile: {
        form: profile,
        data: profile,
    },
    user: {
        authData: {
            id: profile.id
        }
    }

}
const asyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    profile: profileReducer
}

describe('EditableProfileCard.cy.tsx', () => {
    it('playground', () => {
        cy.mount(
            <TestProvider options={{initialState, asyncReducers, theme: Theme.PURPLE}}>
                <Page>
                    <EditableProfileCard/>
                </Page>

            </TestProvider>,
        );
    });
});
