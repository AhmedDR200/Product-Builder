interface IProps {
  imageURL: string;
  alt: string;
  clasName?: string;
}

const Image = ({ imageURL, alt, clasName }: IProps) => {
  return (
    <img
        src={imageURL}
        alt={alt}
        className={clasName}
      />
  );
};

export default Image;
