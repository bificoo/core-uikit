export type WithChildren = {
  /**
   * Provide content to be rendered inside of a
   */
  children?: React.ReactNode;
};

export type WithClassName = {
  /**
   * For css customization.
   */
  className?: string;
};

export type WithStyle = {
  /**
   * The css styles.
   */
  style?: React.CSSProperties;
};

export type EventKey = string | number;

export type WithComponent = WithChildren & WithClassName & WithStyle;
