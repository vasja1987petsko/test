import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface INote {
    timestamp: string;
    autor: string;
    type: typeEnum;
    noteText: string
}

// we can also create class with public static method instead enum
export enum typeEnum {
    MESSAGE = "message",
    PHONE = "phone",
    COFFEE = "coffee",
    BEER = "beer",
    MEETING = "meeting",
}
export interface INotesState {
    list: INote [];
    currentUser: string;
    contact: string;
}

const initialState: INotesState = {
    list: [
        {
            timestamp: new Date( 2023, 0, 20 ).toString(),
            autor: 'Vasyl',
            type: typeEnum.MEETING,
            noteText: 'And a more formal meeting',
        },
        {
            timestamp: new Date( 2023, 0, 19 ).toString(),
            autor: 'Vasyl',
            type: typeEnum.MESSAGE,
            noteText: 'Then we had phone call',
        },
        {
            timestamp: new Date( 2023, 0, 18 ).toString(),
            autor: 'Vasyl',
            type: typeEnum.COFFEE,
            noteText: 'We had coffee',
        },
        {
            timestamp: new Date( 2023, 0, 17 ).toString(),
            autor: 'Vasyl',
            type: typeEnum.PHONE,
            noteText: 'A test note of message',
        },
    ],
    currentUser: 'Vasyl',
    contact: 'Milton Romaguera'
}

export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        createNote: (state: INotesState, action: PayloadAction<INote> ) => {
            state.list.splice(0,0, action.payload);
        },
        deleteNote: (state: INotesState, action: PayloadAction<INote> ) => {
            const newList = state.list.filter((note: INote) => note.timestamp !== action.payload.timestamp);
            state.list = newList;
        }
    },
})

// Action creators are generated for each case reducer function
export const { createNote, deleteNote } = notesSlice.actions

export default notesSlice.reducer