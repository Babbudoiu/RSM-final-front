import React from "react";
import { DinnerTimes } from "./DinnerTimes";
import { LunchTimes } from "./LunchTimes";

export const CurrentBookingFormat = ({ currentBookings, lunch, dinner }) => {
  if (lunch === true) {
    return (
      <div className="booking-container">
        {currentBookings[0] !== undefined ? (
          <table className="booking-table">
            <thead>
              <tr>
                <td className="td-border">Time</td>
                <td className="td-border">Name</td>
                <td className="td-border">Group Size</td>
                <td className="td-border">Phone Number</td>
              </tr>
            </thead>

            <tbody>
              {LunchTimes.map((time, index) => {
                return (
                  <tr key={index}>
                    <td className="td-border">{time}</td>
                    <td className="td-border">
                      {currentBookings[0][index].map((booking) => {
                        return (
                          <>
                            {booking !== null ? (
                              <tr>
                                <td>{`${booking[0]} ${booking[1]}`}</td>
                              </tr>
                            ) : (
                              <></>
                            )}{" "}
                          </>
                        );
                      })}
                    </td>
                    <td className="td-border">
                      {currentBookings[0][index].map((booking) => {
                        return (
                          <>
                            {booking !== null ? (
                              <tr>
                                <td>{booking[2]}</td>
                              </tr>
                            ) : (
                              <></>
                            )}{" "}
                          </>
                        );
                      })}
                    </td>
                    <td className="td-border">
                      {currentBookings[0][index].map((booking) => {
                        return (
                          <>
                            {booking !== null ? (
                              <tr>
                                <td className="center-td">{booking[3]}</td>
                              </tr>
                            ) : (
                              <></>
                            )}{" "}
                          </>
                        );
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <></>
        )}
      </div>
    );
  }
  if (dinner === true) {
    return (
      <div className="booking-container">
        {currentBookings[1] !== undefined ? (
          <table className="booking-table">
            <thead>
              <tr>
                <td className="td-border">Time</td>
                <td className="td-border">Name</td>
                <td className="td-border">Group Size</td>
                <td className="td-border">Phone Number</td>
              </tr>
            </thead>

            <tbody>
              {DinnerTimes.map((time, index) => {
                return (
                  <tr key={index}>
                    <td className="td-border">{time}</td>
                    <td className="td-border">
                      {currentBookings[1][index].map((booking) => {
                        return (
                          <>
                            {booking !== null ? (
                              <tr>
                                <td>{`${booking[0]} ${booking[1]}`}</td>
                              </tr>
                            ) : (
                              <></>
                            )}{" "}
                          </>
                        );
                      })}
                    </td>
                    <td className="td-border">
                      {currentBookings[1][index].map((booking) => {
                        return (
                          <>
                            {booking !== null ? (
                              <tr>
                                <td>{booking[2]}</td>
                              </tr>
                            ) : (
                              <></>
                            )}{" "}
                          </>
                        );
                      })}
                    </td>
                    <td className="td-border">
                      {currentBookings[1][index].map((booking) => {
                        return (
                          <>
                            {booking !== null ? (
                              <tr>
                                <td className="center-td">{booking[3]}</td>
                              </tr>
                            ) : (
                              <></>
                            )}{" "}
                          </>
                        );
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <></>
        )}
      </div>
    );
  } else {
    return <></>;
  }
};
