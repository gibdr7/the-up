import { Moment } from 'moment';

export const toDateString = (m: Moment) => m.format('YYYY-MM-DD');

export const toDateDisplayString = (m: Moment) => m.format('l');

export const toDatetimeDisplayString = (m: Moment) => m.format('LL - h:mm A');

export const titleSlug = str =>
  str
    .toLowerCase()
    .replace(/[^\w\d\s]+/g, '')
    .replace(/\s+/g, '-');
