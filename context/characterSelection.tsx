"use client";

import { createContext, useReducer } from "react";

import type { Character } from "@/types";
import type { Dispatch } from "react";

interface NoCharacter {
  id: undefined;
  name: "";
  episode: [];
}

interface TypeData {
  char1: Character | NoCharacter;
  char2: Character | NoCharacter;
}

interface ActionType {
  type: "UPDATE_CHARACTER_1" | "UPDATE_CHARACTER_2";
  payload: Character;
}

const initialState: TypeData = {
  char1: { name: "", id: undefined, episode: [] },
  char2: { name: "", id: undefined, episode: [] },
};

export const CharacterSelection = createContext<{
  data: TypeData;
  dispatch: Dispatch<ActionType>;
}>({
  data: initialState,
  dispatch: () => [],
});

function reducer(state: TypeData, action: ActionType): TypeData {
  switch (action.type) {
    case "UPDATE_CHARACTER_1":
      return { ...state, char1: action.payload };
    case "UPDATE_CHARACTER_2":
      return { ...state, char2: action.payload };
    default:
      return state;
  }
}

export default function CharacterSelectionProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [data, dispatch] = useReducer(reducer, initialState);

  return (
    <CharacterSelection.Provider value={{ data, dispatch }}>
      {children}
    </CharacterSelection.Provider>
  );
}
