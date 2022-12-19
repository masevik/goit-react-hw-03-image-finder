import { Dna } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Dna
      visible={true}
      height="30"
      width="30"
      ariaLabel="dna-loading"
      wrapperStyle={{
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
      wrapperClass="dna-wrapper"
    />
  );
};
