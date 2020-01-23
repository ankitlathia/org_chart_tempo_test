import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';
import fetch from 'isomorphic-unfetch';
import styled from "styled-components";
import TeamRenderer from "../components/TeamRenderer";

const TeamWrapper = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    list-style-type: none;
    grid-gap: 30px;
  }
`;

const Index =  (props) => {
  let teamList= [];

  props.data.map((team, indx) => teamList.push(<TeamRenderer key={indx} team={team}/>))

  return (
    <>
      <Head title="Home" />
      <Nav />
      <TeamWrapper>
        <ul>
          {teamList}
        </ul>
      </TeamWrapper>
    </>
  );
}

Index.getInitialProps = async function() {
  const res = await fetch('https://tempo-exercises.herokuapp.com/rest/v1/teams');
  const data = await res.json();

  return {
    data
  };
};

export default Index
