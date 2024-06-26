import { LocalStorage } from "@raycast/api";
import { Item } from "./types";

export async function getItems(): Promise<Item[]> {
  const items = await LocalStorage.getItem<string>("items");
  if (!items) return [];

  return JSON.parse(items);
}

export async function getItem(index: number) {
  const items = await getItems();
  return items.filter((x) => parseInt(x.favourite) === index)?.[0];
}

export async function saveItems(items: Item[]) {
  await LocalStorage.setItem("items", JSON.stringify(items));
}
