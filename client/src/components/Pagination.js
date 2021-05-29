import React from 'react';
import BoostrapPagination from 'react-bootstrap/Pagination';

const Pagination = (props) => {

		const { totalPages, currentPage,  onClicPage } = props;

		const renderPaginationItems = () => {
			const items = [];
			for (let i = 0; i< totalPages; i++) {
				items.push(
					<BoostrapPagination.Item key={i} active={i === currentPage} onClick={(e) => onClicPage(i)}>
						{i + 1}
					</BoostrapPagination.Item>
				);
			}
			return items.map((item)=>item);

		}
		return (
			<BoostrapPagination>
				<BoostrapPagination.Prev />
				{renderPaginationItems()}
				<BoostrapPagination.Next />
			</BoostrapPagination>
		);

}

export default Pagination;