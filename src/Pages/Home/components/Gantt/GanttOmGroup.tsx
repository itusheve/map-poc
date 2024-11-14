interface GanttOmGroupProps {
	title: string;
}

export function GanttOmGroup({ title }: GanttOmGroupProps) {
	return (
		<>
			<h3 className="sticky text-white">
				{title} 
			</h3>
			<div className="w-full overflow-x-scroll rounded-xl bg-[#325993]">
				<div className="grid w-[400%] py-2" style={{
					gridTemplateColumns: "repeat(384, minmax(0, 1fr))", 
					gridTemplateRows: "repeat(2, 1.5em)",
					rowGap: "0.5em",
				}}>
					<div className="whitespace-nowrap break-keep rounded-full bg-blue-200 text-sm" style={{
						gridColumn: "1 / 9",
						gridRow: "1",
					
					}}>
						שם הפקודה
					</div>
					<div className="whitespace-nowrap break-keep rounded-full bg-blue-200 text-sm" style={{
						gridColumn: "3 / 11",
						gridRow: "2",
					
					}}>
						שם הפקודה
					</div>
				</div>
			</div>
		</>
	);
}
