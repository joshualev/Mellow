import { createSlice, current } from "@reduxjs/toolkit";
import data from "../../data.json";

export const sectionsDataSlice = createSlice({
  name: "sectionsData",
  initialState: { sectionsData: data },
  reducers: {
    reorder: (state, action) => {
      const sections = state.sectionsData;
      const { source, destination } = action.payload;

      // if no destination is provided, return
      if (!action.payload.destination) return;

      // if card is not in the same section where initially selected
      if (source.droppableId !== destination.droppableId) {
        // FIND both the source and destination column index
        const sourceColIndex = sections.findIndex(
          (e) => e.id === source.droppableId
        );
        const destinationColIndex = sections.findIndex(
          (e) => e.id === destination.droppableId
        );

        // access the source and destination column arrays
        const sourceCol = sections[sourceColIndex];
        const destinationCol = sections[destinationColIndex];

        // access the index of the source and destination card
        // in each respective column
        const sourceCard = [...sourceCol.cards];
        const destinationCard = [...destinationCol.cards];

        // REMOVE the selected card index from the source column array
        const [removed] = sourceCard.splice(source.index, 1);
        // INSERT the aforementioned selected card to the destination column array
        destinationCard.splice(destination.index, 0, removed);

        // UPDATE source column array
        sections[sourceColIndex].cards = sourceCard;
        // UPDATE destination column array
        sections[destinationColIndex].cards = destinationCard;
      } else {
        // SAME COLUMN
        const sourceColIndex = sections.findIndex(
          (e) => e.id === source.droppableId
        );
        const column = sections[source.droppableId - 1];
        const copiedCards = [...column.cards];

        //remove source card from initial column position
        const [removed] = copiedCards.splice(source.index, 1);
        //insert aforementioned removed card into new destination index
        copiedCards.splice(destination.index, 0, removed);

        sections[sourceColIndex].cards = copiedCards;
      }
    },
    // TODO
    addCard: (state) => {},
    removeCard: (state) => {},
  },
});

export const { reorder, addCard, removeCard } = sectionsDataSlice.actions;

export default sectionsDataSlice.reducer;
