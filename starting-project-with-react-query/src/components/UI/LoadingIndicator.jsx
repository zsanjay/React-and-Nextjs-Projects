const {
  withNativeWind: withNativeWind
} = require("nativewind/metro");

export default function LoadingIndicator() {
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}