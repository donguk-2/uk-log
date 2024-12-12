import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Header />

      <div className="text-red-500">asd</div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>UKlog</title>;
