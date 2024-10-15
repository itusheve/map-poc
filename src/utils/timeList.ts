
import moment from 'moment'
export function TimeList(steps: number) : string[] {
  let timeList: string[] = []
  let time = moment().subtract('hours', 6);
  // round to the nearest 15 minutes 0 15 30 45
  time = time.startOf('hour').add('minutes', Math.ceil(time.minutes() / 15) * 15)
  for (let i = 0; i < steps * 12 ; i++) {
    timeList.push(time.format('HH:mm'))
    time = time.add('minutes', 60 / steps)
  }
  return timeList
}