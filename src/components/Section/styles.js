import styled from 'styled-components';

export const Container = styled.section`
  margin: 40px 0;

  >h2 {
    padding-bottom: 16px;
    // margin-bottom: 28px;

    color: ${ ({ theme }) => theme.COLORS.WHITE};
    font-size: 20px;
    font-weight: 400;
  }


`;