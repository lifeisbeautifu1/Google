interface AvatarProps {
  url: string;
}

const Avatar: React.FC<AvatarProps> = ({ url }) => {
  return (
    <img
      loading='lazy'
      src={url}
      alt='profile pic'
      className='h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110'
    />
  );
};

export default Avatar;
