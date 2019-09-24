import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from 'styled-components';

const List = styled(TabList)`
  display: flex;
  width: 300px;
  justify-content: space-between;
`;

// const Item = styled.li`
// 	width: 80px;
// 	height: 50px;
// 	text-align: center;
// 	border-bottom: 5px solid ${(props) => (props.current ? '#3498db' : 'transparent')};
// 	transition: border-bottom .3s ease-in-out;
// `;

// const SLink = styled(Link)`
//   height: 50px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

export default (props) => (
	<Tabs>
		{console.log(props)}
		<List>
			<Tab>Videos</Tab>
			<Tab>Production Companies</Tab>
			<Tab>Countries</Tab>
		</List>

		<TabPanel>
			<h2>Videos Contents</h2>
		</TabPanel>
		<TabPanel>
			<h2>Production Companies List</h2>
		</TabPanel>
		<TabPanel>
			<h2>Countries List</h2>
		</TabPanel>
	</Tabs>
);
