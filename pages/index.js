import { useEffect, useState } from "react";
import supabase from "../utils/supabase";
import BondingCard from "../components/BondingCard/BondingCard";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import { useColorMode } from "../contexts/ColorMode";

export default function Home() {
  const { themes, colorTheme, setColorTheme } = useColorMode();
  const [contractData, setContractData] = useState(null);
  const [gridColumns, setGridColumns] = useState(`1fr 1fr 1fr`);

  async function getContracts() {
    try {
      const { data, error } = await supabase
        .from("Liquidity Mining Contracts")
        .select("*")
        .range(0, 9);
      if (error) throw error;
      if (data) {
        setContractData(data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getContracts();
  }, []);

  useEffect(() => {
    console.log({ contractData });
    if (contractData?.length === 1) {
      setGridColumns(`1fr`);
    }
    if (contractData?.length === 2) {
      setGridColumns(`1fr 1fr`);
    }
    if (contractData?.length > 2) {
      setGridColumns(`1fr 1fr 1fr`);
    }
  }, [contractData]);

  return (
    <>
      <div style={{ backgroundColor: `${colorTheme?.background}`, position: `relative` }}>
        <Nav />
        <div
          style={{
            display: `grid`,
            gridTemplateColumns: `${gridColumns}`,
            padding: `2rem 0`,
            margin: `0 auto`,
            placeItems: `center`,
          }}
        >
          {contractData?.length > 0 &&
            contractData.map((contract, index) => {
              return <BondingCard contract={contract} key={index} />;
            })}
        </div>
        <Footer />
      </div>
    </>
  );
}
