import { useNavigate } from 'react-router-dom';
import * as S from './Styles';

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Main>
        <S.Content>
          <S.StatusCode>500</S.StatusCode>
          <S.Title> Opps, Something went wrong!</S.Title>
          <S.Text>Sorry, we couldn't load the page, please try again.</S.Text>
          <S.Actions>
            <button onClick={() => navigate(-1)}>Back</button>
          </S.Actions>
        </S.Content>
      </S.Main>
    </S.Container>
  );
};

export default ErrorPage;
