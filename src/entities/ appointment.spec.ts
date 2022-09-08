import { describe, expect, test } from "vitest";
import { getFutureDate } from "../tests/utils/get-future-date";
import { Appointment } from "./appointment";

describe("Appointment", () => {
  let startsAt: Date;
  let endsAt: Date;

  test("create an appointment", () => {
    startsAt = getFutureDate("2022-12-10");
    endsAt = getFutureDate("2022-12-20");

    const appointment = new Appointment({
      customer: "John Doe",
      startsAt,
      endsAt,
    });

    expect(appointment).toBeInstanceOf(Appointment);
    expect(appointment.customer).toEqual("John Doe");
  });

  test("Cannot create an appointment with start date greater than end date", () => {
    startsAt = getFutureDate("2022-10-10");
    endsAt = getFutureDate("2022-09-10");

    expect(
      () =>
        new Appointment({
          customer: "John Doe",
          startsAt,
          endsAt,
        })
    ).toThrow();
  });

  test("Cannot create an appointment with start date in the past", () => {
    startsAt = getFutureDate("2000-10-10");
    endsAt = getFutureDate("2000-09-10");

    expect(
      () =>
        new Appointment({
          customer: "John Doe",
          startsAt,
          endsAt,
        })
    ).toThrow();
  });
});
