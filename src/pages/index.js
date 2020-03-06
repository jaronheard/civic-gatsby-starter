import React from "react";
import { Link } from "gatsby";
import { Button } from "@hackoregon/ui-core";

import Image from "../components/Image";
import SEO from "../components/SEO";
import Wrapper from "../components/Wrapper";

const IndexPage = () => (
  <Wrapper>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div heroTitle="Civic and Gatsby Starter" heroSubtitle="They play nice!">
      <p>
        No tweaks needed with{" "}
        <a href="https://www.npmjs.com/package/@hackoregon/ui-core">
          @hackoregon/ui-core
        </a>{" "}
        version 0.0.3! You can even import the global styles and get all the
        styling.
      </p>
      <p>Now go build something great.</p>
      <Button>Yay</Button>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </Wrapper>
);

export default IndexPage;
