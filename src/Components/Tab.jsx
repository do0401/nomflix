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
	&:hover {
		cursor: pointer;
		background-color: rgba(255, 255, 255, 0.2);
	}
`;

const Panel = styled(TabPanel)``;

const Video = styled.div`width: 400px;`;

const VideoItem = styled.a`
	display: flex;
	justify-content: column;
	font-size: 1.2rem;
	padding: 20px;
	&:hover {
		color: darkorange;
	}
`;

const Company = styled.div`
	padding: 20px;
	width: 400px;
	background-color: rgba(255, 255, 255, 0.7);
`;

const CompanyLogo = styled.img`
	width: 120px;
	margin: 10px 30px;
`;

const Season = styled.div`width: 600px;`;

const SeasonInfo = styled.div`
	display: inline-block;
	margin: 10px;
`;

const SeasonPoster = styled.img`width: 100px;`;

// const SeasonText = styled.div`align-self: flex-end;`;

const SeasonName = styled.p``;

const SeasonDate = styled.p`color: darkgray;`;

export default (props) => (
	<Tabs>
		{console.log(props)}
		<List>
			<TabTitle>Videos</TabTitle>
			<TabTitle>Production Companies</TabTitle>
			{props.seasons && props.seasons.length > 0 && <TabTitle>Seasons</TabTitle>}
		</List>

		<Panel>
			<Video>
				{props.videos &&
					props.videos.length > 0 &&
					props.videos.map((video) => (
						<VideoItem key={video.id} href={`https://www.youtube.com/watch?v=${video.key}`}>
							{video.name}
						</VideoItem>
					))}
			</Video>
		</Panel>
		<TabPanel>
			<Company>
				{props.companies &&
					props.companies.length > 0 &&
					props.companies.map(
						(company) =>
							company.logo_path !== null ? (
								<CompanyLogo
									key={company.id}
									src={`https://image.tmdb.org/t/p/original/${company.logo_path}`}
								/>
							) : null
					)}
			</Company>
		</TabPanel>
		{props.seasons &&
		props.seasons.length > 0 && (
			<TabPanel>
				<Season>
					{props.seasons.map((season) => (
						<SeasonInfo key={season.id}>
							<SeasonPoster src={`https://image.tmdb.org/t/p/original/${season.poster_path}`} />
							<SeasonName>{season.name}</SeasonName>
							<SeasonDate>{season.air_date && season.air_date.substring(0, 4)}</SeasonDate>
						</SeasonInfo>
					))}
				</Season>
			</TabPanel>
		)}
	</Tabs>
);
