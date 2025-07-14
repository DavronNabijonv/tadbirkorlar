interface IProps {
  collectionName: string;
  id: string;
  image: string;
}

export const getImage = ({ collectionName, id, image }: IProps): string => {
  return `${import.meta.env.VITE_BASE_URL}/api/files/${collectionName}/${id}/${image}`;
};
