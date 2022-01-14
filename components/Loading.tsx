import ReactLoading, { LoadingProps } from "react-loading";

const Loading = ({ type, color }: LoadingProps) => (
  <ReactLoading type={type} color={color} height={40} width={40} />
);

export default Loading;
