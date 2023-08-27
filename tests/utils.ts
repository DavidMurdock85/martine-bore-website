import { act } from '@testing-library/react';

export const waitOnAct = async () =>{
    await act(async () => {
        await new Promise((resolve)=>{
            setTimeout(resolve, 50);
        })
    })
}