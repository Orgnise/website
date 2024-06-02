export function capitalize(str: string) {
  if (!str || typeof str !== "string") return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const chunk = <T>(array: T[], chunk_size: number): T[][] => {
  return array.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / chunk_size);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, [] as T[][]);
};

export const formatDate = (dateString: string) => {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
};