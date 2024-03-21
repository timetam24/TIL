export const initialState = {
  selectedId: 0,
  messages: {
    0: "Hello, Taylor",
    1: "Hello, Alice",
    2: "Hello, Bob",
  },
};

export interface State {
  selectedId: number;
  messages: { [id: number]: string | undefined };
}

export interface Action {
  type: "changed_selection" | "edited_message" | "sent_message";
  selectedId?: number;
  message?: string;
  contactId?: number;
}

export function messengerReducer(
  state: State = initialState,
  action: Action
): State {
  switch (action.type) {
    case "changed_selection": {
      return {
        ...state,
        selectedId: action.contactId || 0,
      };
    }
    case "edited_message": {
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: action.message,
        },
      };
    }
    case "sent_message": {
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: "",
        },
      };
    }

    default: {
      throw new Error("Unknown action: " + action.type);
    }
  }
}
