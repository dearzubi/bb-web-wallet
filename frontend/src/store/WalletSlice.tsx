import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DropDownItem {
  id: number;
  name: string;
  color: string;
}

interface WalletState {
  selectedTechId: number;
  dropDownItems: DropDownItem[];
  selectedTech: DropDownItem | null;
}

const dropDownItems: DropDownItem[] = [
  {
    id: 1,
    name: "Ethereum",
    color: "#dddddd",
  },
  {
    id: 2,
    name: "Goereli",
    color: "#4d99eb",
  },
  {
    id: 3,
    name: "Polygon",
    color: "#8248e5",
  },
];

const WalletSlice = createSlice({
  name: 'Wallet',
  initialState: {
    selectedTechId: 1,
    dropDownItems: dropDownItems,
    selectedTech: null,
  } as WalletState,


  reducers: {
    setTechnology: (state, action: PayloadAction<number>) => {
      state.selectedTechId = action.payload;
    },

    setSelectedTech: (state) => {
      const tech = state.dropDownItems.find(
        (item) => item.id === state.selectedTechId
      );
      state.selectedTech = tech || null;
    },
  },
});

export const { setTechnology, setSelectedTech } = WalletSlice.actions;

export default WalletSlice.reducer;
