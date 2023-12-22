export const convertToInitials = (fullName: string) => {
  return fullName
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join(" ");
};
