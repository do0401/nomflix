import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ul`display: flex;`;

const Item = styled.li`
	width: 80px;
	height: 50px;
	text-align: center;
	border-bottom: 5px solid ${(props) => (props.current ? '#3498db' : 'transparent')};
	transition: border-bottom .3s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter((props) => (
	<List>
		{console.log(props)}
		<Item>
			<SLink to="/"> Video </SLink>{' '}
		</Item>{' '}
		<Item>
			<SLink to="/tv"> Production Companies </SLink>{' '}
		</Item>{' '}
		<Item>
			<SLink to="/search"> Countries </SLink>{' '}
		</Item>{' '}
	</List>
));
