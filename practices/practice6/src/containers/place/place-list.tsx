import { places } from "./data";
import Place from "./place";

export default function PlaceList() {
  const listItems = places.map((place) => (
    <li key={place.id} className=" flex gap-4 p-2 rounded border">
      <Place place={place} />
    </li>
  ));
  return <ul className="flex flex-col gap-4 p-4 pt-0">{listItems}</ul>;
}
