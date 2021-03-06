import styled, { css } from 'styled-components';
import { BsEmojiFrown } from 'react-icons/bs';
import { motion, Variants } from 'framer-motion';

export const Container = styled.div``;

export const Content = styled.main`
  max-width: 124rem;
  margin: 0 auto;
`;

const carListVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.3,
    },
  },
};

export const CarList = styled(motion.ul).attrs({
  variants: carListVariants,
  initial: 'hidden',
  animate: 'visible',
})`
  width: 100%;
  padding: 2.4rem 0.8rem 0;

  display: grid;
  gap: 2.4rem;
  grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));

  @media (max-width: 916px) {
    padding-bottom: 20rem;
  }
`;

export const Wrapper = styled.section`
  height: calc(100vh - 8.4rem);

  padding: 2.4rem 0.8rem 16rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SadIcon = styled(BsEmojiFrown)`
  font-size: 9.2rem;
  color: ${({ theme }) => theme.colors.error};
`;

export const Message = styled.p`
  margin: 1.2rem 0;
  font-size: 2.4rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.error};
`;

export const TryAgainButton = styled.button`
  ${({ theme }) => css`
    background: none;
    width: 100%;
    max-width: 16rem;

    padding: 0.8rem 1.6rem;
    border-radius: 1.2rem;
    border: 2px solid ${theme.colors.error};

    font-size: 1.6rem;
    font-weight: 700;
    color: ${theme.colors.error};

    transition: all 0.2s ease;

    &:hover {
      background: ${theme.colors.error};
      color: ${theme.colors.text_50};
    }
  `}
`;
