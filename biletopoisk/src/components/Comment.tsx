import Image from "next/image";
import placeholder from "@/assets/avatarPlaceholder.png";

export const Comment = ({
  name,
  text,
  rating,
}: {
  name: string;
  text: string;
  rating: number;
}) => {
  return (
    <div className="flex gap-6 bg-white rounded-lg p-6">
      <Image
        src={placeholder}
        alt={`Аватар пользователя ${name}`}
        width={100}
        height={100}
      />
      <div className="flex flex-col flex-1">
        <div className="flex justify-between mb-4">
          <h3 className="font-bold">{name}</h3>
          <div>
            Оценка: <span className="font-bold">{rating}</span>
          </div>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};
