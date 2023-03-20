import React from "react";
import { BarChart, Subtitle, Title, Card } from "@tremor/react";
import { useGrouptasksByStatusQuery } from "../features/api/apiSlice";

function Stats() {
  const {
    data: tasks,
    isLoading,
    isError,
    error,
  } = useGrouptasksByStatusQuery();
  let content;
  if (isLoading) content = <p>Loading...</p>;
  else if (isError) content = <p>{error.error}</p>;
  else {
    const dataFormatter = (number) =>
      `$ ${Intl.NumberFormat("us").format(number).toString()}`;
    return (
      <Card>
        <Title>Number of species threatened with extinction (2021)</Title>
        <Subtitle>
          The IUCN Red List has assessed only a small share of the total known
          species in the world.
        </Subtitle>
        <BarChart
          className="mt-6"
          data={tasks}
          index={[0]}
          categories={["Number of threatened species"]}
          colors={["blue"]}
          valueFormatter={dataFormatter}
          yAxisWidth={48}
        />
      </Card>
    );
  }
}

export default Stats;
