import { memo } from "react";

interface Props {
  toy: string;
}
export default memo(function AptonKid(props: Props) {
  return (
    <div className="bg-blue-400 border m-4 h-6">AptonKid Toy{props.toy}</div>
  );
});