import moment from 'moment'

const dateTimeCell = (value: string | number | Date) => {
  if (!value) {
    return ''
  }
  
  return moment(value).format('MM/DD/YYYY [at] h:mm A')
}

export const dataCells = {
  dateTime: dateTimeCell,
}
