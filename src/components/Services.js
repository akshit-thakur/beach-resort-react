import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac est eget nisl sagittis scelerisque. Proin luctus mauris eget risus semper, vel faucibus turpis malesuada.",
      },
      {
        icon: <FaHiking />,
        title: "Free Hiking",
        info:
          "Phasellus hendrerit augue sed hendrerit porta. Morbi ultricies dolor vel metus rutrum, sit amet viverra erat luctus. Nullam at velit tempor, consectetur mi vitae, interdum.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "Vivamus congue auctor risus id luctus. Aliquam blandit malesuada porta. Mauris dignissim ultricies facilisis. Mauris dapibus dolor est, non sollicitudin justo lacinia vitae. Pellentesque eleifend.",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Aliquam dapibus placerat justo, eget laoreet risus. Pellentesque purus sem, semper quis mi non, suscipit porta elit. Cras eget neque est. Ut porttitor, lorem ut.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
