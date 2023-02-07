// @ts-nocheck
import { Space, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { Draggable } from './draggable.component'
import { Droppable } from './droppable.component'
import { DataType } from './table.interface'

export const columns: ColumnsType<DataType> = [
	{
		title: (
			<Droppable id="name">
				<Draggable id="name">Name</Draggable>
			</Droppable>
		),
		dataIndex: 'name',
		key: 'name',
		render: text => <a>{text}</a>,
	},
	{
		title: (
			<Droppable id="age">
				<Draggable id="age">Age</Draggable>
			</Droppable>
		),
		dataIndex: 'age',
		key: 'age',
	},
	{
		title: (
			<Droppable id="address">
				<Draggable id="address">Address</Draggable>
			</Droppable>
		),
		dataIndex: 'address',
		key: 'address',
	},
	{
		title: (
			<Droppable id="tags">
				<Draggable id="tags">Tags</Draggable>
			</Droppable>
		),
		key: 'tags',
		dataIndex: 'tags',
		render: (_, { tags }) => (
			<>
				{tags.map(tag => {
					let color = tag.length > 5 ? 'geekblue' : 'green'
					if (tag === 'loser') {
						color = 'volcano'
					}
					return (
						<Tag color={color} key={tag}>
							{tag.toUpperCase()}
						</Tag>
					)
				})}
			</>
		),
	},
	{
		title: 'Action',
		key: 'action',
		render: (_, record) => (
			<Space size="middle">
				<a>Invite {record.name}</a>
				<a>Delete</a>
			</Space>
		),
	},
]
