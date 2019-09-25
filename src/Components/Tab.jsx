import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from 'styled-components';

const List = styled(TabList)`
  display: flex;
  width: 400px;
  justify-content: space-between;
`;

const TabTitle = styled(Tab)`
	width: 100%;
	height: 30px;
	text-align: center;
	line-height: 29px;
	background-color: rgba(255, 255, 255, 0.3);
`;

const Panel = styled(TabPanel)``;

const Video = styled.div``;

const VideoItem = styled.video``;

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
			<TabTitle>Videos</TabTitle>
			<TabTitle>Production Companies</TabTitle>
			<TabTitle>Countries</TabTitle>
		</List>

		<Panel>
			<h2>Videos Contents</h2>
			<Video>
				{props.videos &&
					props.videos.length > 0 &&
					props.videos.map((video) => <VideoItem src={`https://www.youtube.com/watch?v=${video.key}`} />)}
			</Video>
		</Panel>
		<TabPanel>
			<h2>Production Companies List</h2>
		</TabPanel>
		<TabPanel>
			<h2>Countries List</h2>
		</TabPanel>
	</Tabs>
);
