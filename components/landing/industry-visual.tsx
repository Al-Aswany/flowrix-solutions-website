type IndustryVisualProps = {
  kind: string;
};

export function IndustryVisual({ kind }: IndustryVisualProps) {
  if (kind === "factory") {
    return (
      <svg aria-hidden="true" viewBox="0 0 420 220" className="h-full w-full" fill="none">
        <path d="M40 180V93l83 35V84l90 39v57H40Z" fill="#10251F" stroke="#3D665B" />
        <path d="M213 180V65h38v115" fill="#16322B" stroke="#3D665B" />
        <path d="M251 180v-49l74-30v79" fill="#10251F" stroke="#3D665B" />
        <path d="M69 145h26v35H69zm76 0h26v35h-26zm101 7h32v28h-32z" fill="#27DDBB" fillOpacity=".32" stroke="#36E2C1" />
        <path d="M27 180h336" stroke="#497066" />
        <circle cx="343" cy="63" r="33" fill="#2DE0BD" fillOpacity=".08" stroke="#36E2C1" strokeDasharray="4 6" />
        <path d="M327 63h32M343 47v32" stroke="#46E8C8" />
      </svg>
    );
  }
  if (kind === "retail") {
    return (
      <svg aria-hidden="true" viewBox="0 0 420 220" className="h-full w-full" fill="none">
        <path d="M67 84h210v102H67z" fill="#10251F" stroke="#446E63" />
        <path d="M52 84 79 45h191l24 39H52Z" fill="#19332C" stroke="#446E63" />
        <path d="M53 84h241" stroke="#38E1C0" />
        <path d="M87 107h61v79H87zm84 0h82v43h-82z" fill="#26DDBA" fillOpacity=".15" stroke="#35E3C1" />
        <path d="M312 72h55v115h-55z" fill="#0D1D19" stroke="#446E63" />
        <path d="M323 89h33v42h-33z" fill="#2DE0BD" fillOpacity=".18" stroke="#35E3C1" />
        <circle cx="328" cy="166" r="6" stroke="#35E3C1" /><circle cx="352" cy="166" r="6" stroke="#35E3C1" />
        <path d="M29 187h361" stroke="#446E63" />
      </svg>
    );
  }
  if (kind === "distribution") {
    return (
      <svg aria-hidden="true" viewBox="0 0 420 220" className="h-full w-full" fill="none">
        <path d="m38 174 102-91 115 83" stroke="#466F65" />
        <path d="M92 175V97h228v78" fill="#11251F" stroke="#466F65" />
        <path d="M119 119h54v56h-54zm65 0h54v56h-54zm65 0h44v56h-44z" fill="#27DDBB" fillOpacity=".12" stroke="#36E2C1" />
        <path d="M28 175h364" stroke="#466F65" />
        <path d="M317 145h51v30h-51zM330 131h24v14" fill="#18362E" stroke="#36E2C1" />
        <circle cx="329" cy="178" r="8" fill="#0D1B18" stroke="#36E2C1" /><circle cx="357" cy="178" r="8" fill="#0D1B18" stroke="#36E2C1" />
        <path d="M67 68c46-31 90-34 132-9" stroke="#37E2C1" strokeDasharray="3 6" />
        <path d="m193 52 9 8-11 4" stroke="#37E2C1" />
      </svg>
    );
  }
  if (kind === "service") {
    return (
      <svg aria-hidden="true" viewBox="0 0 420 220" className="h-full w-full" fill="none">
        <rect x="61" y="36" width="280" height="154" rx="14" fill="#10251F" stroke="#466F65" />
        <path d="M61 73h280M110 73v117" stroke="#466F65" />
        <circle cx="84" cy="55" r="5" fill="#2CE0BD" /><path d="M130 103h75M130 123h134M130 143h101" stroke="#3D6D61" strokeWidth="6" strokeLinecap="round" />
        <path d="M280 100h38v38h-38z" fill="#29DDBB" fillOpacity=".18" stroke="#38E2C1" />
        <path d="m290 119 7 7 12-15" stroke="#4DE7C8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M130 167h170" stroke="#2EE0BE" strokeDasharray="4 5" />
      </svg>
    );
  }
  return (
    <svg aria-hidden="true" viewBox="0 0 420 220" className="h-full w-full" fill="none">
      <circle cx="210" cy="110" r="41" fill="#27DDBB" fillOpacity=".13" stroke="#36E2C1" />
      <path d="M128 61h55v36h-55zM237 42h55v36h-55zM285 134h55v36h-55zM82 139h55v36H82z" fill="#11251F" stroke="#466F65" />
      <path d="m183 78 29 32 36-42m-3 63 40 20m-151 6 44-28" stroke="#3FE4C4" strokeDasharray="4 5" />
      <path d="m197 109 10 10 20-22" stroke="#4DE9CA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="210" cy="110" r="73" stroke="#37E2C1" strokeOpacity=".18" strokeDasharray="3 7" />
    </svg>
  );
}
