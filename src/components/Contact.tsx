import React from "react";
import {
  Calendar,
  TimeInput,
  Input,
  Textarea,
  Button,
} from "@nextui-org/react";
import type { DateValue } from "@react-types/calendar";
import { today, getLocalTimeZone, isWeekend } from "@internationalized/date";
import { useLocale } from "@react-aria/i18n";
import { parseDate } from "@internationalized/date";
import { Time } from "@internationalized/date";

export const Contact = () => {
  const [date, setDate] = React.useState<DateValue>(today(getLocalTimeZone()));
  const { locale } = useLocale();
  const isInvalidWeekend = isWeekend(date, locale);

  const [value, setValue] = React.useState("");

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);

  return (
    <div className="contactCon">
      <div className="formsLeftSide">
        <h1>Come in touch with me</h1>
        <Calendar
          aria-label="Date (Uncontrolled)"
          defaultValue={parseDate("2024-06-13")}
          showMonthAndYearPickers
          errorMessage={
            isInvalidWeekend ? "Not available on weekends!" : undefined
          }
          isInvalid={isInvalidWeekend}
          value={date}
          onChange={setDate}
        />
      </div>
      <div className="formsRightSide">
        <TimeInput
          isRequired
          label="Meeting Time"
          hourCycle={24}
          minValue={new Time(17)}
          maxValue={new Time(21)}
          defaultValue={new Time(17, 0)}
          className="contactTimeInput"
          errorMessage={null}
          labelPlacement="outside"
        />
        <Input
          type="email"
          label="Email"
          placeholder="Enter your email"
          variant="bordered"
          isInvalid={isInvalid}
          onValueChange={setValue}
          color={isInvalid ? "danger" : "success"}
          errorMessage="Please enter a valid email"
          className="max-w-xs"
          isRequired
          isClearable
        />
        <Input
          type="text"
          label="Name"
          placeholder="Enter your name"
          variant="bordered"
          className="max-w-xs"
          isRequired
          isClearable
        />
        <Textarea
          label="Reason"
          placeholder="Enter your reason for the meeting"
          className="max-w-xs"
          isRequired
        />
        <Button color="primary" className="contactSendButton">
          Send request
        </Button>
      </div>
    </div>
  );
};
