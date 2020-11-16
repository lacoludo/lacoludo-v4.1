import { format, parse } from 'date-fns'

export const dateFormat = (date: Date) => format(date, 'dd/MM/yyyy')

export const dateParse = (date: string) => parse(date, 'dd/MM/yyyy', new Date())
