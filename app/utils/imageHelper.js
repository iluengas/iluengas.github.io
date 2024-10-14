export const getImageUrl = (imagePath) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}images/${imagePath}`;
  console.log("Generated Image URL:", url);
  return `${process.env.NEXT_PUBLIC_BASE_URL}images/${imagePath}`;
};
