import { Table } from 'antd'

import { data } from './data'

export const MyTable = ({ columns }) => {
	return (
		<div style={{ overflow: 'hidden' }}>
			<Table
				columns={columns}
				dataSource={data}
				pagination={{ hideOnSinglePage: true }}
			/>
		</div>
	)
}
