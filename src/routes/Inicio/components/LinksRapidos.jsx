import React, { Component } from "react";
import LinkRapido from "./LinkRapido";
import LinksRapidosLoader from "./LinksRapidosLoader";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_LINKS_RAPIDOS = gql`
  query {
    links(limit: 12) {
      Link
      Imagem {
        url
      }
    }
  }
`;

class LinksRapidos extends Component {
  render() {
    return (
      <div className=" pt-5 pt-md-4">
        <h4 className="mb-3">Links rápidos</h4>
        <div className="d-flex flex-wrap">
          <Query query={GET_LINKS_RAPIDOS}>
            {({ loading, error, data }) => {
              if (loading) {
                return <LinksRapidosLoader />;
              }
              if (error) {
                return `Error! ${error.message}`;
              }

              return data.links.map((link, index) => (
                <LinkRapido
                  link={link.Link}
                  imagem={"http://159.89.232.182:1337/" + link.Imagem.url}
                  key={index}
                />
              ));
            }}
          </Query>
        </div>
      </div>
    );
  }
}

export default LinksRapidos;
