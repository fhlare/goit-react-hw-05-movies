import { Watch } from 'react-loader-spinner';
import { LoaderDiv } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderDiv>
      <Watch
        height="80"
        width="80"
        radius="48"
        color="orange"
        ariaLabel="watch-loading"
        wrapperStyle={{
          justifyContent: 'center'
        }}
        visible={true}
      />
    </LoaderDiv>
  );
}