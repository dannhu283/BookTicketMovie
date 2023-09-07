import React from "react";

import { useSelector } from "react-redux";

import Item from "./Item";

export default function ListItem({ seats }) {
  const { selectedSeats } = useSelector((state) => {
    return state.movieBooking;
  });

  // sử dụng restparams để bóc tách
  let [seatNumbers, ...remain] = seats;

  // lấy danh sách tất cả các số ghế phần tử đầu tiên
  seatNumbers = seats[0].danhSachGhe.map((seat) => seat.soGhe);

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-center text-light">Màn hình</h3>
          <span class="placeholder col-md-12 bg-info mb-4"></span>
        </div>
        <table>
          <thead>
            <tr>
              {/* hàng trống đầu tiên để hiển thị số ghế */}
              <th></th>
              {seatNumbers.map((seatNumber) => {
                return (
                  <th className="text-center text-warning" key={seatNumber}>
                    {seatNumber}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {remain.map((row) => {
              return (
                <tr key={row.hang}>
                  <th className="mb-1 text-warning">{row.hang}</th>
                  {row.danhSachGhe.map((seat) => {
                    //tìm ghế đang chọn có trong ds ghế hay không
                    const isSelected = selectedSeats.find(
                      (item) => item.soGhe === seat.soGhe
                    );
                    return (
                      <td key={seat.soGhe}>
                        <Item seat={seat} isSelected={!!isSelected} />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
