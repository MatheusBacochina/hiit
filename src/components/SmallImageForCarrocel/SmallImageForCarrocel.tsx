export const SmallImageForCarrocel = ({
  canSnap = true,
  userName = "",
  placing = "",
  university = "",
  url = "",
}: {
  canSnap: boolean;
  userName: string;
  placing: string;
  university: string;
  url: string;
}) => {
  return (
    <div
      className={`pointer-events-none flex ${
        !canSnap ? "snap-center" : ""
      }  flex-col gap-4`}
    >
      <div
        style={{ backgroundImage: `url(${url})` }}
        className="h-48 w-48 rounded-3xl bg-cover"
      ></div>
      <h1 className="text-center">
        <div className="text-sm font-normal text-white">{userName}</div>
        <div className="text-sm font-normal text-white">{placing}</div>
        <div className="text-sm font-semibold text-white ">{university}</div>
      </h1>
    </div>
  );
};
