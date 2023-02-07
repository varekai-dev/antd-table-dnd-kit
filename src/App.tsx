import { DndContext, DragOverlay } from '@dnd-kit/core'
import {
	restrictToHorizontalAxis,
	restrictToWindowEdges,
} from '@dnd-kit/modifiers'
import { useState } from 'react'
import { columns } from './components/MyTable/columns'
import { MyTable } from './components/MyTable/my-table.component'

export function App() {
	const [columnOrder, setColumnOrder] = useState(columns)
	const [activeColumn, setActiveColumn] = useState<any>(null)

	const handleDragStart = (event: any) => {
		const selectedColumn = columnOrder.filter(
			column => column.key === event.active.id
		)
		setActiveColumn(selectedColumn)
	}

	const handleDragEnd = (event: any) => {
		setActiveColumn(null)
		const { active, over } = event
		if (active.id !== over.id) {
			setColumnOrder(items => {
				const oldIndex = items.findIndex(item => item.key === active.id)
				const newIndex = items.findIndex(item => item.key === over.id)
				const result = [...items]
				const [removed] = result.splice(oldIndex, 1)
				result.splice(newIndex, 0, removed)
				return result
			})
		}
	}
	return (
		<div className="App">
			<DndContext
				onDragStart={handleDragStart}
				onDragEnd={handleDragEnd}
				modifiers={[restrictToHorizontalAxis]}
			>
				<MyTable columns={columnOrder} />
				<DragOverlay modifiers={[restrictToWindowEdges]}>
					{activeColumn ? (
						<div
							style={{ background: 'white', minWidth: '200px', opacity: 0.8 }}
						>
							<MyTable columns={activeColumn} />
						</div>
					) : null}
				</DragOverlay>
			</DndContext>
		</div>
	)
}
