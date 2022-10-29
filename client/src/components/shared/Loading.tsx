import { ReactComponent as LoadingSVG } from "../../assets/loading.svg";

interface Props {
  width?: number;
  height?: number;
}

const Loading = ({ width = 200, height = 200 }: Props) => {
  return <LoadingSVG width={width} height={height} />;
};

export default Loading;
