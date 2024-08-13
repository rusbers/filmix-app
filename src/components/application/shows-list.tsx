import { ShowItemData } from "@/lib/types";
import GridContainer from "./grid-container";
import ShowItemCard from "./show-item-card";

type ShowsListProps = {
  shows: ShowItemData[];
};

export function ShowsList({ shows }: ShowsListProps) {
  return (
    <GridContainer>
      {shows.map((show, index) => (
        <ShowItemCard key={index} type="grid" showItem={show} />
      ))}
    </GridContainer>
  );
}
