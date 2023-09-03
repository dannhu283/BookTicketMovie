import { SELECT_SEAT, REMOVE_SEAT, RESET } from "../constants/movieConstants";

export const selectSeat = (seat) => {
  return {
    type: SELECT_SEAT,
    payload: seat,
  };
};

export const removeSeat = (seatId) => {
  return {
    type: REMOVE_SEAT,
    payload: seatId,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};
