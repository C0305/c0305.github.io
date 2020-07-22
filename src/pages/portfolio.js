import React from "react"
import Layout from "../components/layout"
import CardContainer from "../components/cards-container"

const PortfolioPage = () => {
  return (
    <>
      <Layout path="portfolio">
        <div className="title">
          Portfolio
        </div>
        <CardContainer/>
      </Layout>
    </>
  )
}

export default PortfolioPage
