import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
    includeNumbers: boolean,
    includeSymbols: boolean,
    includeLowercase: boolean,
    includeUppercase: boolean,
    passwordLength: number,
    passwordOutput: string,
    errorMsg: string,
    copiedToClipboard: boolean,
};

const initialState: AppState  = {
    includeNumbers: false,
    includeSymbols: false,
    includeLowercase: false,
    includeUppercase: false,
    passwordLength: 16,
    passwordOutput: '',
    errorMsg: '',
    copiedToClipboard: false
};

const rootReducer = createSlice({
    name: 'appslice',
    initialState,
    reducers: {
        includeNumbers: (state, action: PayloadAction<boolean>) => {
            state.includeNumbers = action.payload;
          },
        includeSymbols: (state, action: PayloadAction<boolean>) => {
            state.includeSymbols = action.payload;
        },
        includeLowercase: (state, action: PayloadAction<boolean>) => {
            state.includeLowercase = action.payload;
        },
        includeUppercase: (state, action: PayloadAction<boolean>) => {
            state.includeUppercase = action.payload;
        },
        setPasswordLength: (state, action: PayloadAction<number>) => {
            state.passwordLength = action.payload;
        },
        setPasswordOutput: (state, action: PayloadAction<string>) => {
            state.passwordOutput = action.payload;
        },
        setErrorMsg: (state, action: PayloadAction<string>) => {
            state.errorMsg = action.payload;
        },
        setCopiedToClipboard: (state, action: PayloadAction<boolean>) => {
            state.copiedToClipboard = action.payload;
        }
    }
});
export const { 
    includeNumbers,
    includeSymbols,
    includeLowercase,
    includeUppercase,
    setPasswordLength,
    setPasswordOutput,
    setErrorMsg,
    setCopiedToClipboard } = rootReducer.actions;
export default rootReducer.reducer;