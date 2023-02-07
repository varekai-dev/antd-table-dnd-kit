import React, { FC, PropsWithChildren } from 'react'
import { useDraggable } from '@dnd-kit/core'

interface DraggableProps {
	id: string
}

export const Draggable: FC<PropsWithChildren<DraggableProps>> = ({
	children,
	id,
}) => {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id,
	})
	const style = transform
		? {
				visible: 'hidden',
				opacity: 0,
				transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
				zIndex: 100,
		  }
		: undefined

	return (
		<button ref={setNodeRef} style={style} {...listeners} {...attributes}>
			{children}
		</button>
	)
}
