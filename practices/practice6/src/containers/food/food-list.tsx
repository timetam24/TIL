export function FoodList({ items }: { items: Food[] }) {
  return (
    <table>
      <tbody className="text-lg">
        {items.map((food) => (
          <tr key={food.id}>
            <td className="text-red-800">{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
        {items.length === 0 && <p className="text-center">No results found</p>}
      </tbody>
    </table>
  );
}

export interface Food {
  id: number;
  name: string;
  description: string;
}

export const foods: Food[] = [
  {
    id: 0,
    name: "Sushi",
    description:
      "Sushi is a traditional Japanese dish of prepared vinegared rice",
  },
  {
    id: 1,
    name: "Dal",
    description:
      "The most common way of preparing dal is in the form of a soup to which onions, tomatoes and various spices may be added",
  },
  {
    id: 2,
    name: "Pierogi",
    description:
      "Pierogi are filled dumplings made by wrapping unleavened dough around a savoury or sweet filling and cooking in boiling water",
  },
  {
    id: 3,
    name: "Shish kebab",
    description:
      "Shish kebab is a popular meal of skewered and grilled cubes of meat.",
  },
  {
    id: 4,
    name: "Dim sum",
    description:
      "Dim sum is a large range of small dishes that Cantonese people traditionally enjoy in restaurants for breakfast and lunch",
  },
];
