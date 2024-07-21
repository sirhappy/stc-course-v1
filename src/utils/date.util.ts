import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

type RawDateType = string | number | Dayjs | undefined | null | Date

export function isValidDate(date: RawDateType) {
  return dayjs(date).isValid();
};

export function toDayJs(date: RawDateType) {
  const dayJs = dayjs(date);
  if (!dayJs.isValid())
    return null;

  return dayJs;
};

export function formatDate(d: RawDateType, format?: string) {
  const date = toDayJs(d);
  if (!date)
    return null;

  if (format)
    return date.format(format);

  return date.format(EDateFormat.DD_MM_YYYY_TIME);
}

export function timeFromNow(date: RawDateType) {
  if (!toDayJs(date))
    return null;

  return dayjs(date).fromNow();
}
