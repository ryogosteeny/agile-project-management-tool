import React from 'react';
import { css } from '@emotion/react';
import { styleTheme } from '../../theme/theme';
import { useOpen } from '../../hooks/ui/useOpen';
import { MenuIcon } from '../icons/MenuIcon';

interface ButtonMenuContentsType {
  label: string;
  onClick: () => void;
}

interface Props {
  menuContents: ButtonMenuContentsType[];
}

export const Menu = ({ menuContents }: Props) => {
  const { openTargetRef, isOpen, openEventHandler } = useOpen();

  return (
    <div css={pullDownButtonContainer} ref={openTargetRef}>
      <button css={buttonStyle} type="button" onClick={openEventHandler}>
        <MenuIcon />
      </button>

      {isOpen && (
        <ul css={pullDownButtonStyle}>
          {menuContents.map((menuItem) => (
            <li key={menuItem.label} css={pullDownButtonItemStyle} onClick={menuItem.onClick}>
              <span>{menuItem.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const pullDownButtonContainer = css`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

const buttonStyle = css`
  background-color: ${styleTheme.colors.surface.main};
  color: ${styleTheme.colors.text.dark};
  font-weight: ${styleTheme.fontWeight.normal};
  border-radius: ${styleTheme.borderRadius.large}px;
  cursor: pointer;
  display: inline-block;
  padding: ${styleTheme.spacing(0.5)}px 0 0;
  margin-left: auto;
  line-height: 2;
  max-width: 100%;
  width: 32px;
  height: 32px;
  text-align: center;
  &:hover {
    background-color: ${styleTheme.colors.surface.dark};
  }
`;

const pullDownButtonStyle = css`
  margin-top: ${styleTheme.spacing(0.5)}px;
  padding: ${styleTheme.spacing(0.5)}px 0;
  box-shadow: ${styleTheme.boxShadow.main};
  border: 1px solid ${styleTheme.colors.border.main};
  border-radius: ${styleTheme.borderRadius.regular}px;
`;

const pullDownButtonItemStyle = css`
  font-size: ${styleTheme.fontSize.medium}rem;
  color: ${styleTheme.colors.text.main};
  padding: ${styleTheme.spacing(1)}px ${styleTheme.spacing(1.5)}px ${styleTheme.spacing(0.875)}px;
  text-align: center;
  cursor: pointer;
  &:hover { background-color: ${styleTheme.colors.surface.light}
`;
