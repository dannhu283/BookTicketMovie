import { useDispatch } from "react-redux";
import { selectSeat } from "../redux/actions/movieActions";

export default function Item({ seat, isSelected }) {
  const dispatch = useDispatch();

  let classes = "btn text-center rounded-2 w-100 m-1";

  if (seat.daDat) {
    classes += " btn-danger";
  } else if (isSelected) {
    classes += " btn-success";
  } else {
    classes += " btn-info";
  }

  const handleSelect = () => {
    dispatch(selectSeat({ ...seat, isSelected: !isSelected }));
  };

  return (
    <button onClick={handleSelect} className={classes} disabled={seat.daDat}>
      {seat.soGhe}
    </button>
  );
}
