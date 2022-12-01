import NavigationBar from "../NavigationBar";

import * as styles from './Layout.styles';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <NavigationBar />

      <styles.Content>
        {children}
      </styles.Content>
    </>
  )
}

export default Layout;