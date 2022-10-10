import styled from '@emotion/styled';

export const PhonebookHeader = styled.h1`
  margin-top: ${({ theme }) => theme.space[0]};
  margin-bottom: ${({ theme }) => theme.space[4]}px;
  color: ${({ theme }) => theme.colors.accent};
`;

export const ContactsHeader = styled.h2`
  margin-top: ${({ theme }) => theme.space[5]}px;
  margin-bottom: ${({ theme }) => theme.space[3]}px;
  color: ${({ theme }) => theme.colors.accent};
`;
