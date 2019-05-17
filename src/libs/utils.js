
export const convertDate = (date) => {
  if (!date) return ''
  const myDate = new Date(date)
  return myDate.getFullYear() + '-' + (myDate.getMonth() + 1) + '-' + myDate.getDate()
}

