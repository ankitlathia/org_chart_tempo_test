import { Component, useEffect, useState } from "react";
import styled from "styled-components";
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const CustomLI = styled.li`
  padding: 10px;

  a{
    display: block;
    height: 100%;
    color: #000;
    text-decoration: none;
  }

  .teamContainer {
    background: #e4e2e2;
    border-radius: 5px;
    box-shadow: 5px 4px 9px 0px #ccc;
     
      .header {
        background: #553285;
        color: #fff;
        padding: 10px;
        text-align: center;
        font-size: .8em;
        border-radius: 5px;

        h2 {
            margin: 0;
        }
      }

      .leadSection {
          display: table;
          padding: 10px;
          margin: auto;

          * {
            display: table-cell;
            vertical-align: middle;
          }

          img {
            width: 25px;
            margin-right: 10px;
          }
      }
  }
`

const TeamRenderer = ({team}) => {
    const [userDetail, setUserDetail] = useState({});

    const fetchUserDetail = async () => {
        const res = await fetch(`http://tempo-exercises.herokuapp.com/rest/v1/users/${team.teamLead}`);
        const data = await res.json();
      
        setUserDetail(data);
    }

    useEffect(()=>{
        fetchUserDetail();
    },[]);

    return (
        <CustomLI>
            <Link href="/team/[id]" as={`/team/${team.id}`}>
                <a>
                    <div className="teamContainer">
                      <div className="header">
                          <h2 className="teamName">{team.name}</h2>
                      </div>
                      <div className="leadSection">
                          <img src="/static/leader.svg" />
                          <span className="leaderName">{userDetail.name ? `${userDetail.name.first} ${userDetail.name.last}` : 'Not Assigned yet' }</span>
                      </div>
                  </div>
                </a>
            </Link>
        </CustomLI>
      );
}

export default TeamRenderer;