

import React from 'react';

interface Props {
	children: React.ReactNode;
	open: boolean;
	onClose: () => void;
}

export function BottomDialog(props: Props) {
	return (
		<div
			className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${props.open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
				} flex justify-center items-end`}
			onClick={props.onClose}
		>
			<div
				className={`bg-white w-full max-h-[80%] rounded-t-lg shadow-lg transform transition-transform duration-300 ${props.open ? 'translate-y-0' : 'translate-y-full'
					}`}
				onClick={(e) => e.stopPropagation()}
			>

				{props.children}
			</div>
		</div>
	);
}
