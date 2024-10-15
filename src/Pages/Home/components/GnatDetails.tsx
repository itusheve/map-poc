import { TimeList } from "../../../utils/timeList";

export function GnatDetails() {
    return (
      <div className="bg-secondary text-primary-foreground pt-2 pb-1 rounded ">
        {/* First Grid */}
        <div className="grid w-full text-[10px] rounded pb-4" style={{ gridTemplateColumns: 'repeat(48, minmax(0, 1fr))' }}>
          {TimeList(4).map((time) => (
            <div key={time} className="w-full grid place-items-center">
              {time.includes(':15') || time.includes(':45') ? (
                <div>|</div>
              ) : (
                <div>{time.includes(':00') ? time.split(':')[0] : time.split(':')[0] + '.5'}</div>
              )}
            </div>
          ))}
        </div>
  
        {/* Second Grid with Span Columns */}
        <div className="grid w-full " style={{ gridTemplateColumns: 'repeat(48, minmax(0, 1fr))' }}>
          {/* Span from column 2 to column 6 */}
          <div className="col-span-5 text-[10px] font-bold rounded border py-1 px-2 border-approve" style={{ gridColumnStart: 2, gridColumnEnd: 7 }}>
            2 to 6 action
          </div>
  
          {/* Span from column 8 to column 14 */}
          <div className="col-span-7 border py-1 px-2 font-bold text-[10px] rounded border-alert-foreground" style={{ gridColumnStart: 8, gridColumnEnd: 14 }}>
            8 to 14 action
          </div>
  
          {/* Span from column 15 to column 25 */}
          <div className="col-span-11 border py-1 px-2 font-bold text-[10px] rounded" style={{ gridColumnStart: 15, gridColumnEnd: 26 }}>
            15 to 25 action
          </div>
        </div>
  
  
        {/* Second Grid with Span Columns */}
        <div className="grid w-full text-[7px] rounded pt-2" style={{ gridTemplateColumns: 'repeat(48, minmax(0, 1fr))' }}>
          {/* Span from column 2 to column 6 */}
          <div className="col-span-5 border py-1 px-2 font-bold" style={{ gridColumnStart: 3, gridColumnEnd: 9 }}>
            3 to 9 action
          </div>
  
          {/* Span from column 8 to column 14 */}
          <div className="col-span-7 border py-1 px-2 font-bold" style={{ gridColumnStart: 12, gridColumnEnd: 20 }}>
            12 to 20 action
          </div>
  
          {/* Span from column 15 to column 25 */}
          <div className="col-span-11 border py-1 px-2 font-bold" style={{ gridColumnStart: 25, gridColumnEnd: 40 }}>
            25 to 40 action
          </div>
        </div>
  
      </div>
    );
  }