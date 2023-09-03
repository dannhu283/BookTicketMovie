import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeSeat } from "../redux/actions/movieActions";
import { reset } from "../redux/actions/movieActions";

export default function Booking() {
  const { selectedSeats, totalPrice } = useSelector((state) => {
    return state.movieBooking;
  });

  const dispatch = useDispatch();

  const handleRemove = (seatId) => {
    dispatch(removeSeat(seatId));
  };

  const handleBooking = () => {
    dispatch(reset());

    alert("Chúc mừng bạn đã đặt mua vé thành công");
  };

  return (
    <>
      <div>
        <h3 className="text-center text-white mb-3">Danh sách ghế bạn chọn</h3>
        <p className="text-white fw-bold">
          <span
            style={{
              padding: "10px 20px",
              backgroundColor: "#af3d50",
              borderRadius: "10px",
              margin: "10px",
            }}
          ></span>
          Ghế đã đặt
        </p>
        <p className="text-white fw-bold my-4">
          <span
            style={{
              padding: "10px 20px",
              backgroundColor: "green",
              borderRadius: "10px",
              margin: "10px",
            }}
          ></span>
          Ghế đang chọn
        </p>
        <p className="text-white fw-bold">
          <span
            style={{
              padding: "10px 20px",
              backgroundColor: "#0dcaf0",
              borderRadius: "10px",
              margin: "10px",
            }}
          ></span>
          Ghế chưa đặt
        </p>
      </div>
      <table className="table table-danger table-bordered text-white text-center">
        <thead>
          <th>Số Ghế</th>
          <th>Giá</th>
          <th>Hủy</th>
        </thead>
        <tbody>
          {selectedSeats.map((item) => {
            return (
              <tr>
                <th>{item.soGhe}</th>
                <th>{item.gia.toLocaleString()}</th>
                <th>
                  <button
                    onClick={() => handleRemove(item.soGhe)}
                    className="btn btn-danger"
                  >
                    X
                  </button>
                </th>
              </tr>
            );
          })}
          <tr>
            <th>Tổng Tiền</th>
            <th>{totalPrice.toLocaleString()}</th>
            <th>
              <button onClick={handleBooking} className="btn btn-success">
                Đặt Vé
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </>
  );
}
