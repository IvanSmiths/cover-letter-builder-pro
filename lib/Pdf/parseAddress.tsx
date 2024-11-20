export const parseAddress = (
  address: string,
): { street: string; city: string } => {
  const zipCodeRegex = /\d{4,}[^,\s]*/;
  const zipCodeIndex = address.search(zipCodeRegex);

  if (zipCodeIndex === -1) {
    return { street: address, city: "" };
  }

  const street = address.slice(0, zipCodeIndex).trim();
  const city = address.slice(zipCodeIndex).trim();

  return { street, city };
};
